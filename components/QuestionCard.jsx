//This component is for each individual question
import React from 'react'
import { nanoid } from "nanoid"
import AnswerButtons from './AnswerButtons'

function QuestionCard({ playerChoice, answerArr, id, answerSelect, ask, isCorrect, answersCheckedState, answerCorrect }) {

  //Styles for buttons depending on answerChecked State:
  //Selection styles (pre-answer check)
  const btnStylesDefault = {
    backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
  }
  const btnStylesSelected = {
    backgroundImage: "linear-gradient(#3D94D9, #0067B9)",
    borderColor: "#006DBC",
    boxShadow: "rgba(131, 192, 253, 0.9) 0 0 0 3px",
    outline: "none",
    fontWeight: "bold",
  }

  //Styles post-answer check
  const btnStylesAnswerCheckCorrect = {
    // backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    backgroundImage: "linear-gradient(0deg, rgba(34, 126, 34, 1) 30%, rgba(168, 251, 60, 1) 90.3%)",
    boxShadow: "rgba(153, 253, 131, 0.9) 0 0 0 3px",
    borderColor: "#006DBC",
    outline: "none",
  }
  const btnStylesAnswerCheckWrong = {
    // backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    backgroundImage: "linear-gradient( rgba(237, 83, 83, 1) 30%,  rgba(165, 9, 9, 1) 60% )",
    boxShadow: "rgba(255, 7, 7, 0.9) 0 0 0 3px",
    borderColor: "#006DBC",
    outline: "none",
  }
  const btnStylesAnswerCheckNoAnswer = {
    backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    // boxShadow: "rgba(255, 175, 24, 0.9) 0 0 0 3px",
    borderColor: "#006DBC",
    outline: "none",
  }
  const btnStylesAnswerCheckOtherAnswers = {
    backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    boxShadow: "rgba(186, 186, 186, 0.9) 0 0 0 3px",
    borderColor: "#006DBC",
    outline: "none",
    pointerEvents: "none",
  }
  const btnStylesAnswerCheckCorrectNotChosen= {
    backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    boxShadow: "rgba(153, 253, 131, 0.9) 0 0 0 3px",

    borderColor: "#006DBC",
    outline: "none",
    pointerEvents: "none",
  }
  
  let styles;

  //Map over each questions answer array and return the neccesary buttons
  const answerButtons = answerArr.map((ans, ind) => {
    
    if (!answersCheckedState) {
      if (playerChoice === ans) {
        styles = btnStylesSelected
      } else if (playerChoice !== ans) {
        styles = btnStylesDefault
      }
    } else if (answersCheckedState) {
      if (playerChoice === "") {
        styles = btnStylesAnswerCheckNoAnswer
      } else if (playerChoice === ans && answerCorrect === ans) {
        styles = btnStylesAnswerCheckCorrect
      } else if (playerChoice === ans && answerCorrect !== ans) {
        styles = btnStylesAnswerCheckWrong
      }else if( playerChoice !== ans && answerCorrect !== ans){
        styles = btnStylesAnswerCheckOtherAnswers
      } else if (playerChoice !== ans && answerCorrect == ans) {
        styles = btnStylesAnswerCheckCorrectNotChosen
      }else {
        styles = btnStylesDefault
      }
    }
    
    return (
      <AnswerButtons
        key={nanoid()}
        id={id}
        value={ans}
        answerSelect={answerSelect}
        playerChoice={playerChoice}
        styles={styles}
      />
    )
  })

  return (
    <div className="question--card">
      <h2 className="question--text">
        {/* maybe implement a "score" box on each card that is always present, just empty before checking answers (and receiving the FA icons)*/}
        {answersCheckedState && isCorrect && <span>< i className="fa-regular fa-circle-check" style={{ color: "#05fc05" }} ></i ></span>}
        
        {answersCheckedState && !isCorrect && <span>< i className="fa-regular fa-circle-xmark" style={{ color: "#Fa3c3d" }}></i ></span>}
        {ask}
      </h2>

      <div className="question--answers">
        {answerButtons}
      </div>
    </div>
  )
}

export default QuestionCard
