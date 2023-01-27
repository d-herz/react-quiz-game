import React from "react";
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false)
  
  //Populate initial questions array with 5 easy boolean questions from game category (15)
  //base64 encoding and atob() called in question
  //Considering a variable for category/difficulty change to be inserted into url strin
  const [questions, setQuestions] = React.useState(

    React.useEffect(() => {
      fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean&encode=base64`)
        .then(res => res.json())
        .then(data => {
          return setQuestions(data.results)
        })
    }, [])
  )
  console.log(questions)


  function handleStartQuiz() {
    setGameStart(!gameStart)
  }
  console.log(`Game Start Status:${gameStart}`)

  return (
    <main>
      {
        gameStart ?
          <QuestionsPage
            questions={questions}
          /> :
          <Start 
            handleStart={handleStartQuiz}
          />
      }
      
      
   
    </main>
  )
}