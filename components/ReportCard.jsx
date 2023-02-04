import React from 'react'

function ReportCard({ questions }) {
  
  let score = 0;
  let outOf = questions.length
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].isCorrect) {
      score++
    }
  }
  console.log(`You got ${score}/ ${outOf} correct`)


  let responses = {
    1: "Well, you tried",
    2: "Well, you tried",
    3: "Well, you tried",
  }


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

        {/* <button className="btn btn--start"
          onClick={handleStart}>
          Start Quiz!
        </button> */}

      
      </div>

    </section>
  )
}


export default ReportCard
