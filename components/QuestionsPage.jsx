import React from 'react'
import Question from './Question'
import Header from "./Header"
import Footer from "./Footer"
import { nanoid } from "nanoid"

//questions props is trivia state array from <App> fetch 
function QuestionsPage({ questions, answerTrue, answerFalse, checkAns }) {


 

  //Mapping Data and creating each question card
  //nanoID for key
  const questionCard = questions.map((questionObj, ind) => {
    return (
      <Question
        key={nanoid()}
        id={questionObj.id}
        ask={questionObj.question}
        ans={questionObj.answer}
        playerChoice={questionObj.playerChoice}
        answerTrue={answerTrue}
        answerFalse={answerFalse}
        // btnStyles={btnStyles}
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
