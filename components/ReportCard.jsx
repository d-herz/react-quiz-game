import React from 'react'

function ReportCard({ questions, handleStart }) {
  
  let score = 0;
  let outOf = questions.length
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].isCorrect) {
      score++
    }
  }
  // console.log(`You got ${score}/ ${outOf} correct`)
  let totalScore = (score / outOf) *100

  let goodScoreResponse = ["Wow, Nice Work!!", "Genius!!", "Impressive!!", "Crushed it!!", "Excellent!!", "You did great!!"]
  let decentScroreResponse = ["Not bad!", "Passable!", "Decent work!", "Acceptable!", "Pretty good!", "Count it!"]
  let badScroreResponse = ["Better luck next time!", "Thanks for being here?", "What matters is you tried", "Not great", "Grades don't matter anyways, right?"]
  
  let randomResponseIndex = Math.floor(Math.random() * 5)

  let response;
  if (totalScore === 100) {
    response = goodScoreResponse[randomResponseIndex]
  } else if (totalScore >= 75) {
    response = decentScroreResponse[randomResponseIndex]
  } else if (totalScore >= 50) {
    response = badScroreResponse[randomResponseIndex]
  } else {
    response = "Hey, no judgement!"
  }

  return (

    <section className="report--card--main" >

      <div className="report--card--container">

        <h1 className="start--title">
          <i className="fa-brands fa-earlybirds"></i>
          QuizHub!
        </h1>

        <div className="report--card--body">
          <h3 className="">
            You Scored: {totalScore}%
          </h3>

          <h3>
            {response}
          </h3>

          <div className="start--selection--container">
            <button
              className="btn btn--other"
              onClick={handleStart}
            >
              Play Again
            </button>
          </div>
          
        </div>

      
      </div>

    </section>
  )
}

export default ReportCard
