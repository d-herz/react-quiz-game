//This component is for each individual question
import React from 'react'
import { nanoid } from "nanoid"
import AnswerButtons from './AnswerButtons'


function QuestionCard(props) {

  const btnStyles = {
    backgroundImage: props.playerChoice ? "linear-gradient(#AA0000, #EF0107)" :
      "linear-gradient(#42A1EC, #0070C9)",
      
  }

  //Map over each questions answer array and return the neccesary buttons?
  const answerButtons = props.answerArr.map((ans, ind) => {
    return (
      <AnswerButtons
        key={nanoid()}
        id={props.id}
        value={ans}
        btnStyles={btnStyles}
        answerSelect={props.answerSelect}
      />
    )
  })

  return (
    
    <div className="question--card">
      <h2 className="question--text">
        {props.ask}
      </h2>
      <div className="question--answers">

        {/* <h4 className="question--answer--text">
          {ans}
        </h4> */}
        {/* <input
          type='button'
          style={btnStyles}
          className='btn btn--ans'
          value="True"
          onClick={(event) => props.answerSelect(event, props.id)}
        /> */}
          
        {/* <input
          type='button'
          style={btnStyles}
          className='btn btn--ans'
          value="False"
          onClick={(event) => props.answerSelect(event, props.id)}
        /> */}

        {answerButtons}
      </div>
    </div>

  )
}



export default QuestionCard
