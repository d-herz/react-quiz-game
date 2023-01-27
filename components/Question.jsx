import React from 'react'

function Question(props) {

  //might have to elevate these button handlers
  //Idea: set a "choice/selected" property on each answer as a boolean that is switched based on selected
  //Buttons need to hold a different style on click as well
  function answerTrue(event, id){
    if(props.ans === "True"){
      console.log("True, correct!", id)
      console.log(event.target)
    }else{
      console.log("Not true, wrong!")
    }
  }
  function answerFalse(event, id){
    if(props.ans === "False"){
      console.log("False, correct!", id)
    }else{
      console.log("Not false, wrong!")
    }
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
        <button style={props.btnStyles}
        className='btn btn--ans'
        onClick={(event) => answerTrue(event, props.id)}
        >
          TRUE
        </button>
        <button style={props.btnStyles}
        className='btn btn--ans'
        onClick={(event) => answerFalse(event, props.id)}
        >
          FALSE
        </button>
      </div>
    </div>

  )
}



export default Question
