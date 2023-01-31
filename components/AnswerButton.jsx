import React from 'react'

//considering a button component for rendering quantity of buttons needed. WOuld have to pull in "questions" object data
//Should we define an array that combines correct and wrong answers? So they aren't in the same location everytime?

//could set style here? default and chosen??
//maybe disable rest of buttons after one is chosen (so only 1 can be chosen at a time)

function AnswerButton(props) {
  return (
    <input
      type='button'
      style={btnStyles}
      className='btn btn--ans'
      value="True"
      onClick={(event) => props.answerSelect(event, props.id)}
    />

  )
}



export default AnswerButton
