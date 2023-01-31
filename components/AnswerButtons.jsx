import { nanoid } from 'nanoid'
import React from 'react'


//could set style here? default and chosen??
//maybe disable rest of buttons after one is chosen (so only 1 can be chosen at a time)

function AnswerButton({ playerChoice, id, value, answerSelect}) {
  

 

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
    fontWeight: "bold"
    //disable all others?
  }

  const styles = playerChoice === value   ? btnStylesSelected : btnStylesDefault 

 
  return (
    <input
      // Set button name to a unique ID, or the id from props (which means all button "names" for a question are same id as the question)
      // name={nanoid()}
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
