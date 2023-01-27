import React from 'react'

function Question(props) {

  //might have to elevate these button handlers
  function answerTrue(event, id){
    if(props.ans === "True"){
      console.log("True, correct!", id)
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
        <button 
        className='btn btn--ans'
        onClick={(event) => answerTrue(event, props.id)}
        >
          TRUE
        </button>
        <button 
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
