import React from "react";
import Start from "./components/Start"
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
      <Start 
        handleStart={handleStartQuiz}
      />
      
   
   
    </main>
  )
}