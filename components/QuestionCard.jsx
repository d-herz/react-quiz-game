//This component is for each individual question
import React from 'react'
import { nanoid } from "nanoid"
import AnswerButtons from './AnswerButtons'


function QuestionCard({ playerChoice, answerArr, id, answerSelect, ask }) {
  

  //State for tracking button choices only?
  // const [isDisabled, setIsDisabled] = React.useState(false)

  // function disableBtns(event,id) {
  //   setIsDisabled(prevIsDisabled => {
      
  //     answerArr.map(ans => {
  //       return event.target.value === ans ? prevIsDisabled : !prevIsDisabled
        
  //     })

  //     console.log(prevIsDisabled)
  //   })
  //   console.log("buttons")
  // }
  // console.log(isDisabled)


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
        // isDisabled={isDisabled}
        // disableBtns={disableBtns}
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
