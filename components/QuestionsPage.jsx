//Page for rendering all of the question cards
import React from 'react'
import QuestionCard from './QuestionCard'
import Header from "./Header"
import Footer from "./Footer"
import NoQuestions from './NoQuestions'
import { nanoid } from "nanoid"

//questions props is trivia state array from <App> fetch 
function QuestionsPage({ category, difficulty, questions, answerSelect, checkAns, answerCheckedState, handleStart }) {


  //Attaching name to category:
  let categoryName;
  if (category === 15) {
    categoryName = "Video Games"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  }

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
        answersCheckedState={answerCheckedState}
        answerCorrect={questionObj.answerCorrect}
      />
    )
  })

  return (
    <>
      <Header />

      <div className="question--info">
        <span>Category:{category}</span>
        <span>Difficulty:{difficulty}</span>
      </div>
      <section className="question--main">
        <div className="question--container">
          {questions.length > 1 ? questionCard : <NoQuestions />}
        </div>

        <div className='questionPage--button--container'>

          <button
            className="btn btn--check--ans"
            onClick={checkAns}
          >
            Commit Answers
          </button>
          
          <div className='questionPage--minorButtons'>

            <button
              className="btn btn--other--left"
            >
              More questions
            </button>

            <button
              className="btn btn--other--right"
              onClick={handleStart}
            >
              Play Again
            </button>
          </div>

        </div>


      </section>
      <div className="footer--container">
        <Footer />
      </div>
    </>
  )
}

export default QuestionsPage
