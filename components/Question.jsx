import React from 'react'

function Question({ask, ans}) {

  
  return (
    
    <div className="question--card">
      <h2 className="question--text">
        {ask}
      </h2>
      <div className="question--answers">

        {/* <h4 className="question--answer--text">
          {ans}
        </h4> */}
        <button className='btn btn--ans'>TRUE</button>
        <button className='btn btn--ans'>FALSE</button>
      </div>
    </div>

  )
}



export default Question
