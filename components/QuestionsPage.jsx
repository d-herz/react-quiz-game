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
  //could utilize different types T/F or multi choice questions, maybe set url to a variable and have a button press dictate
  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean&encode=base64`)
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
    <>
      <nav className='navbar'>
        <h2 className="question--header">
          Quizzical!
        </h2>
      </nav>
      <section className="question--main">
        <div className="question--container">
          {questionCard}
        </div>

        <button
          className="btn btn--check--ans"
          onClick={checkAns}
        >
          Commit Answers
        </button>

      </section>
    </>
  )
}


export default QuestionsPage
