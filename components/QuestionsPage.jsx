import React from 'react'
import Question from './Question'
import { nanoid } from "nanoid"


function QuestionsPage(props) {
  //bring in data and assign it to array/object
  //use the object to map over and create each "Question" component and pass in props

  let questionArr = ["Does this work?", "How about dis?", "How bow dah?", "Wowza"];



  //Check Answer on button click
  function checkAns() {
    console.log("Answers Checked")
  }

  //Mapping Data and creationg each question card
  //bring in nanoID for key
  const questionCard = questionArr.map((question, ind) => {
    return (
      <Question
        key={nanoid()}
        ask={question}
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
