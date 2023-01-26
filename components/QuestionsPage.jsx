import React from 'react'
import Question from './Question'
import { nanoid } from "nanoid"


function QuestionsPage(props) {
  //bring in data and assign it to array/object
  //use the object to map over and create each "Question" component and pass in props

  let questionArr = ["Does this work?", "How about dis?", "How bow dah?", "Wowza"];

  const [questions, setQuestions] = React.useState([])

  //Fetch from trivia API w/ useEffect
  //using base64 encoding for now and atob() in Question card map
  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&encode=base64`)
      .then(res => res.json())
      .then(data => {
        return setQuestions(data.results)
      })
  }, [])
  console.log(questions)

  //Check Answer on button click
  function checkAns() {
    console.log("Answers Checked")
  }

  //Mapping Data and creationg each question card
  //bring in nanoID for key
  const questionCard = questions.map((questionObj, ind) => {
    return (
      <Question
        key={nanoid()}
        ask={atob(questionObj.question)}
        ans={ind}
      />
    )
  })

  return (
    <section className="question--main">
      <div className="question--container">
        {questionCard}
      </div>

      <button
        className="check-ans-btn"
        onClick={checkAns}
      >
        Check answers
      </button>

    </section>
  )
}


export default QuestionsPage
