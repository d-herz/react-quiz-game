//This component is for each individual question
import React from 'react'
import { nanoid } from "nanoid"
import AnswerButtons from './AnswerButtons'


function QuestionCard({ playerChoice, answerArr, id, answerSelect, ask, isCorrect, answersCheckedState }) {

  //considering moving styles up to QuestionPage, and move check answers down to QuestionPage (so it can be accessed on the same level..?)
  const btnStylesDefault = {
    backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    // cursor: "not-allowed",
    // pointerEvents: "none"
  }
  const btnStylesSelected = {
    backgroundImage: "linear-gradient(#3D94D9, #0067B9)",
    borderColor: "#006DBC",
    boxShadow: "rgba(131, 192, 253, 0.9) 0 0 0 3px",
    outline: "none",
    fontWeight: "bold",
  }

  const btnStylesAnswerCheck = {
    // backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
    // borderColor: isCorrect ? "#11fa01" : "red",
    // boxShadow: "rgba(131, 192, 253, 0.9) 0 0 0 3px",
    // outline: "none",
    // fontWeight: "bold",
    color: "green"
    
  }

  let styles  


  //Map over each questions answer array and return the neccesary buttons
  const answerButtons = answerArr.map((ans, ind) => {

    // styles = playerChoice === ans ? btnStylesSelected : btnStylesDefault
    
    if (!answersCheckedState) {
      if (playerChoice === ans) {
        styles = btnStylesSelected
      } else if (playerChoice !== ans) {
        styles = btnStylesDefault
      }
    } else if (answersCheckedState){
      styles = btnStylesAnswerCheck
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
        {ask}
      </h2>

      <div className="question--answers">
        {answerButtons}
      </div>
    </div>

  )
}

export default QuestionCard
