import React from 'react'
import Question from './Question'
import Header from "./Header"
import Footer from "./Footer"
import { nanoid } from "nanoid"

//questions props is trivia state array from <App> fetch 
function QuestionsPage({ questions }) {

  //Check Answer on button click
  function checkAns() {
    console.log("Answers Checked")
  }

  //  decoding incoming data and pushing to new array
  let sanitizedQuestionArr = questions.map(obj => {
    return {
      id: nanoid(),
      question: atob(obj.question),
      answer: atob(obj.correct_answer),
    }
  })
  console.log(sanitizedQuestionArr)
  

  //Mapping Data and creating each question card
  //nanoID for key
  const questionCard = sanitizedQuestionArr.map((questionObj, ind) => {
    return (
      <Question
        key={nanoid()}
        id={questionObj.id}
        ask={questionObj.question}
        ans={questionObj.answer}
      />
    )
  })

  return (
    <>
      <Header/>

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
      <Footer/>
    </>
  )
}


export default QuestionsPage
