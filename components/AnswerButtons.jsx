import { nanoid } from 'nanoid'
import React from 'react'


//could set style here? default and chosen??
//maybe disable rest of buttons after one is chosen (so only 1 can be chosen at a time)

function AnswerButton({ id, btnStyles, value, answerSelect}) {
  return (
    <input
      // Set button name to a unique ID, or the id from props (which means all button "names" for a question are same id as the question)
      // name={nanoid()}
      name={id}
      type='button'
      style={btnStyles}
      className='btn btn--ans'
      value={value}
      onClick={(event) => answerSelect(event, id)}
    />

  )
}

export default AnswerButton
