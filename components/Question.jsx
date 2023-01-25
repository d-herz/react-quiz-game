import React from 'react'

function Question({ask, ans}) {

  
  return (
    
    <div className="question--card">
      <h2 className="question--text">
        {ask}
      </h2>
      <div className="question--answers">
        <h4 className="question--answert--text">
          {ans}
        </h4>
      </div>
    </div>

  )
}



export default Question
