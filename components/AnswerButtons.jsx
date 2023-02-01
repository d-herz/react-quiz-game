import { nanoid } from 'nanoid'
import React from 'react'


//could set style here? default and chosen??
//maybe disable rest of buttons after one is chosen (so only 1 can be chosen at a time)

function AnswerButton({ id, value, answerSelect, styles}) {
  
 
  return (
    <input
      name={id}
      type='button'
      style={styles}
      // style={btnStylesSelected}
      className='btn btn--ans'
      value={value}
      onClick={(event) => {
        answerSelect(event, id)

      }}

    />

  )
}

export default AnswerButton
