import React from "react";
import { nanoid } from "nanoid"
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false)

  //Populate initial questions array with 5 easy boolean questions from game category (15)
  //base64 encoding and atob() called in question
  //Considering a variable for category/difficulty change to be inserted into url strin
  const [questions, setQuestions] = React.useState([])

  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean&encode=base64`)
      const data = await res.json()

      const cleanedData = await data.results.map(obj => {
        return {
          id: nanoid(),
          question: atob(obj.question),
          answer: atob(obj.correct_answer),
          isSelected: false,
        }
      })

      setQuestions(cleanedData)
    }
    getQuestions()
  }, [])

  console.log(questions)


  //button click handlers on question cards to be passed down to question.jsx
  function answerTrue(event, id) {
    setQuestions(prevQuestions => {
      return prevQuestions.map((ques) => {
        return ques.id === id ?
          { ...ques, isSelected: "True" } :
          ques
      })
    })
    console.log("True")
    console.log(id)
    console.log(questions)
  }

  function answerFalse(event, id) {
    setQuestions(prevQuestions => {
      return prevQuestions.map((ques) => {
        return ques.id === id ?
          { ...ques, isSelected: "False" } :
          ques
      })
    })
    console.log("False")
    console.log(id)
    console.log(questions)
  }

  function handleStartQuiz() {
    setGameStart(!gameStart)
  }
  // console.log(`Game Start Status:${gameStart}`)

  return (
    <main>
      {
        gameStart ?
          <QuestionsPage
            questions={questions}
            answerTrue={answerTrue}
            answerFalse={answerFalse}
          /> :
          <Start
            handleStart={handleStartQuiz}
          />
      }



    </main>
  )
}