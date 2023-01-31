import React from "react";
import { nanoid } from "nanoid"
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";



export default function App() {
  const [gameStart, setGameStart] = React.useState(false)

  //Initial state questions array to be populated by api call with 5 easy boolean questions from game category (15)
  const [questions, setQuestions] = React.useState([])

  //State for tracking button choices only?
  const [buttons, setButtons] = React.useState(false)

  

  //Fetch to trivia api for questions
  React.useEffect(() => {
    async function getQuestions() {

      // const res = await fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean&encode=base64`)
      const res = await fetch(`https://opentdb.com/api.php?amount=10&encode=base64`)
      const data = await res.json()

      const cleanedData = await data.results.map(obj => {
        //first get and clean all answers, store in a reverse sorted array:
        let quesAnswers = []
        //ternary because if multi choice, needs to map over array of incorrect answers
        let cleanWrongAnswers = obj.incorrect_answers.length > 1 ? obj.incorrect_answers.map(x => atob(x)) : [atob(obj.incorrect_answers)]
        let cleanRightAnswer = atob(obj.correct_answer)
        quesAnswers=cleanWrongAnswers.concat(cleanRightAnswer).sort().reverse()

        return {
          id: nanoid(),
          question: atob(obj.question),
          answerCorrect: cleanRightAnswer,
          // answerIncorrect: [atob(obj.incorrect_answers)],
          playerChoice: "",
          isCorrect: "No",
          answerArray: quesAnswers
        }
      })

      setQuestions(cleanedData)
    }
    getQuestions()
  }, [])

  console.log(questions)

  //Start Quiz Function
  function handleStartQuiz() {
    setGameStart(!gameStart)
  }

  //button click handlers on question cards to be passed down to question.jsx. This updates the questions state property "playerChoice", and "isCorrect"
  //Should we use event.target.style to update button style?
  function answerSelect(event, id) {
    setQuestions(prevQuestions => {
      return prevQuestions.map((ques) => {
        return ques.id === id ?
          {
            ...ques,
            playerChoice: event.target.value,
            isCorrect: event.target.value === ques.answer ? true : false
          } :
          ques
      })
    })
    console.log(event.target.value)
    console.log(id)
    console.log(questions)
  }

  //Check Answer on button click also passed down to question
  //Maybe use array.every and check that every playerChoice is equal to every "answer"
  function checkAns() {
    console.log("Answers Checked")
    const allCorrect = questions.every(quesObj => quesObj.isCorrect === true ? true : false)
    console.log(allCorrect)


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
            answerSelect={answerSelect}
            checkAns={checkAns}
          /> :
          <Start
            handleStart={handleStartQuiz}
          />
      }
    </main>
  )
}