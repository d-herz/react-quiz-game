import React from 'react'
import QuestionCard from './QuestionCard'
import Header from "./Header"
import Footer from "./Footer"
import ReportCard from "./ReportCard"
import NoQuestions from './NoQuestions'
import { nanoid } from "nanoid"

function QuestionsPage({ category, difficulty, questions, answerSelect, answerCheckedState, checkAns, unanswered, handleStart }) {

  const [showGradeCard, setShowGradeCard] = React.useState(false)

  function handleShowGrade() {
    //Needs better logic
    if (!answerCheckedState) {
      checkAns()
      if (unanswered === false) {
        
        setShowGradeCard(!showGradeCard)
      } else {
        return
      }
    } else {
      setShowGradeCard(!showGradeCard)
    }
  }

  //Attaching name to category:
  let categoryName;
  if (category === "15" || category === 15) {
    categoryName = "Video Games"
  } else if (category === "9" || category === 9) {
    categoryName = "General"
  } else if (category === "11" || category === 11) {
    categoryName = "Films"
  } else {
    categoryName = "Wtf"
  }

  let difficultyName = ''
  if (difficulty === "easy") {
    difficultyName = "Easy"
  } else if (difficulty === "medium") {
    difficultyName = "Medium"
  } else if (difficulty === "hard") {
    difficultyName = "Hard"
  }

  //Mapping Data and creating each question card
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
        <h3>Category: {categoryName} </h3>
        <h3>Difficulty: {difficultyName} </h3>
      </div>

      <section className="question--main">
        {showGradeCard && <ReportCard
          questions={questions}
          handleStart={handleStart}
        />}
        <div className="question--container">
          {questions.length > 1 ? questionCard : <NoQuestions />}
        </div>

        <div className='questionPage--button--container'>
          <button
            className="btn btn--check--ans"
            onClick={checkAns}
          >
            {!answerCheckedState ? "Check Answers" : "Review Answers"}
          </button>
          
          <div className='questionPage--minorButtons'>
            <button
              className="btn btn--other--left"
              onClick={handleStart}
              >
              Play Again
            </button>
            <button
              className="btn btn--other--right"
              onClick={() => {
                // checkAns()
                handleShowGrade()
              }}
              >
              Show Score
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
