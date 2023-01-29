import React from "react";
import { nanoid } from "nanoid"
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false)

  //Populate initial questions array with 5 easy boolean questions from game category (15)
  const [questions, setQuestions] = React.useState([])
  //Fetch to trivia api for questions
  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean&encode=base64`)
      const data = await res.json()

      const cleanedData = await data.results.map(obj => {
        return {
          id: nanoid(),
          question: atob(obj.question),
          answer: atob(obj.correct_answer),
          playerChoice: "",
        }
      })
      setQuestions(cleanedData)
    }
    getQuestions()
  }, [])

  //effect to run after every answer choice? Update a state?
  // const [playerChoices, setPlayerChoices] = React.useState()
  // React.useEffect(() => {

    
  // },[questions])

  console.log(questions)

  //Start Quiz Function
  function handleStartQuiz() {
    setGameStart(!gameStart)
  }

  //button click handlers on question cards to be passed down to question.jsx. This updates the questions state property "playerChoice"
  function answerTrue(event, id) {
    setQuestions(prevQuestions => {
      return prevQuestions.map((ques) => {
        return ques.id === id ?
          { ...ques, playerChoice: event.target.value } :
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
          { ...ques, playerChoice: event.target.value } :
          ques
      })
    })
    console.log("False")
    console.log(id)
    console.log(questions)
  }

  //Check Answer on button click also passed down to question
  //Maybe use array.every and check that every playerChoice is equal to every "answer"
  function checkAns() {
    console.log("Answers Checked")
    const playerAnswers = questions.map(ques => ques.playerChoice)
    console.log(playerAnswers)

    const correctAnswers = questions.map(ques => ques.answer)
    console.log(correctAnswers)
    
    if (playerAnswers.every((val, idx) => val === correctAnswers[idx])) {
      console.log("All Correct")
    } else {
      console.log("You made mistakes")
    }
  }

  return (
    <main>
      {
        gameStart ?
          <QuestionsPage
            questions={questions}
            answerTrue={answerTrue}
            answerFalse={answerFalse}
            checkAns={checkAns}
          /> :
          <Start
            handleStart={handleStartQuiz}
          />
      }
    </main>
  )
}