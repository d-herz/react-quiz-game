import React from 'react'
import QuestionCard from './QuestionCard'
import Header from "./Header"
import Footer from "./Footer"
import ReportCard from "./ReportCard"
import NoQuestions from './NoQuestions'
import { nanoid } from "nanoid"

function QuestionsPage({ category, difficulty, questions, answerSelect, checkAns, answerCheckedState, handleStart }) {

  const [showGradeCard, setShowGradeCard] = React.useState(false)

  function handleShowGrade() {
    //Needs better logic
    if (!answerCheckedState) {
      checkAns()
      setShowGradeCard(!showGradeCard)
    } else {
      setShowGradeCard(!showGradeCard)
    }
  }

  //Attaching name to category:
  let categoryName;
  if (category === 15) {
    categoryName = "Video Games"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  } else if (category === 11) {
    categoryName = "Films"
  } else if (category === 9) {
    categoryName = "General Knowledge"
  } else if (category === 9) {
    categoryName = "General Knowledge"
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
        <span>Category:{categoryName}</span>
        <span>Difficulty:{difficultyName}</span>
      </div>

      <section className="question--main">
        {showGradeCard && <ReportCard
          questions={questions}
          
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
              See Score
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
