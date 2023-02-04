import React from 'react'

function ReportCard(props) {
  return (

    <section className="report--card--main" >
      <nav>

      </nav>

      <div className="report--card--container">

        <h1 className="start--title">
          QuizHub!
        </h1>

        <div className="start--selection--main--container">
          <p className="start--description">
            You Did bad!
          </p>

          <div className="start--selection--container">
            
          </div>
          
        </div>

        <button className="btn btn--start"
          onClick={props.handleStart}>
          Start Quiz!
        </button>

      
      </div>

    </section>
  )
}


export default ReportCard
