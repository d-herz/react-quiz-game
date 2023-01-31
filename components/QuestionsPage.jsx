//Page for rendering all of the question cards
import React from 'react'
import QuestionCard from './QuestionCard'
import Header from "./Header"
import Footer from "./Footer"
import { nanoid } from "nanoid"

//questions props is trivia state array from <App> fetch 
function QuestionsPage({ questions, answerSelect, checkAns }) {

  //Mapping Data and creating each question card
  //nanoID for key
  const questionCard = questions.map((questionObj, ind) => {
    return (
      <QuestionCard
        key={nanoid()}
        id={questionObj.id}
        ask={questionObj.question}
        playerChoice={questionObj.playerChoice}
        answerSelect={answerSelect}
        answerArr={questionObj.answerArray}
        isCorrect={questionObj.isCorrect}
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
