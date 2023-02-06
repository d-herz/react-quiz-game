import React from 'react'

function AnswerButton({ id, value, answerSelect, styles}) {
  
  return (
    <input
      name={id}
      type='button'
      style={styles}
      className='btn btn--ans'
      value={value}
      onClick={(event) => {
        answerSelect(event, id)
      }}
    />
  )
}

export default AnswerButton
