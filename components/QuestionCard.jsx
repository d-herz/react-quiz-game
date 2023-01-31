//This component is for each individual question
import React from 'react'
import { nanoid } from "nanoid"
import AnswerButtons from './AnswerButtons'


function QuestionCard({ playerChoice, answerArr, id, answerSelect, ask }) {
  
  // const btnStyles = {
  //   backgroundImage: playerChoice ? "linear-gradient(#AA0000, #EF0107)" :
  //     "linear-gradient(#42A1EC, #0070C9)",
      
  // }

  //Map over each questions answer array and return the neccesary buttons
  const answerButtons = answerArr.map((ans, ind) => {
    return (
      <AnswerButtons
        key={nanoid()}
        id={id}
        value={ans}
        // btnStyles={btnStyles}
        answerSelect={answerSelect}
        playerChoice={playerChoice}
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
