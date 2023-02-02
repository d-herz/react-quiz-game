import React from 'react'
import VoidImg from "../void.svg"

function NoQuestions(props) {
  return (
    <div>

      <div className="question--card">
        <h2 className="question--text">
          Whoops! No Questions
        </h2>
        <img className='voidImage' src={VoidImg} alt="" />

        <div className="question--answers">
        
        </div>
      </div>


    </div>
  )
}



export default NoQuestions
