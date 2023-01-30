import React from 'react'

function Question(props) {


  const btnStyles = {
    // backgroundImage: props.playerChoice ? "none" :
    //   "linear-gradient(#42A1EC, #0070C9)",
      
  }

  return (
    
    <div className="question--card">
      <h2 className="question--text">
        {props.ask}
      </h2>
      <div className="question--answers">

        {/* <h4 className="question--answer--text">
          {ans}
        </h4> */}
        <input
          type='button'
          style={btnStyles}
          className='btn btn--ans'
          value="True"
          onClick={(event) => props.answerSelect(event, props.id)}
        >
          
        </input>
        <input
          type='button'
          style={btnStyles}
          className='btn btn--ans'
          value="False"
          onClick={(event) => props.answerSelect(event, props.id)}
        >
          
        </input>
      </div>
    </div>

  )
}



export default Question
