import React from "react";
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false)
  

  function handleStartQuiz() {
    setGameStart(!gameStart)
    // console.log(`Game Start: ${gameStart}`)
  }
  console.log(`Game Start Status:${gameStart}`)

  return (
    <main>
      {
        gameStart ?
          <QuestionsPage
          /> :
          <Start 
            handleStart={handleStartQuiz}
          />
      }
      
      
   
    </main>
  )
}