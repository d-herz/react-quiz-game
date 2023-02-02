import React from "react";
import { nanoid } from "nanoid"
import Start from "./components/Start"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import QuestionsPage from "./components/QuestionsPage";



export default function App() {
  const [gameStart, setGameStart] = React.useState(false)

  //State for tracking if answers are checked and changing styles
  const [answersChecked, setAnswersChecked] = React.useState(false)

  //Initial state questions array to be populated by api call with 5 easy boolean questions from game category (15)
  const [questions, setQuestions] = React.useState([])

  //State for changing category (reruns fetch) do same for difficulty
  //Defaulting to games (category 15)
  const [category, setCategory] = React.useState(15)
  const [difficulty, setDifficulty] = React.useState("easy")

  //Fetch to trivia api for questions
  React.useEffect(() => {
    async function getQuestions() {

      const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=boolean&encode=base64`)
      // const res = await fetch(`https://opentdb.com/api.php?amount=3&encode=base64`)
      const data = await res.json()

      const cleanedData = await data.results.map(obj => {
        //Get and clean all answers, store in a reverse sorted array:
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
          answerArray: quesAnswers,
        }
      })

      setQuestions(cleanedData)
    }
    // console.log(questions)
    getQuestions()
  }, [category, difficulty])


  //Start Quiz Function
  function handleStartQuiz() {
    setGameStart(!gameStart)
  }

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setCategory(event.target.value)
  }
  function handleDifficultyChange(event) {
    console.log(event.target.value)
    setDifficulty(event.target.value)
  }

  //Click handler passed to AnswerButtons. This updates the questions state property "playerChoice", and "isCorrect"
  function answerSelect(event, id) {
    setQuestions(prevQuestions => {

      return prevQuestions.map((ques) => {
        return ques.id === id ?
          {
            ...ques,
            playerChoice: event.target.value,
            isCorrect: event.target.value === ques.answerCorrect ? true : false
          } :
          {
            ...ques,

          }
      })
    })
    // console.log(event.target.value)
    // console.log(id)
    setAnswersChecked(false)
  }
  
  console.log(questions)

  //Check Answer on button click also passed down to question


  //Check Answers State Handler Function
  function handleAnswerCheck() {
    setAnswersChecked(!answersChecked)
  }
  // console.log(answersChecked)


  function checkAns() {

    //Logic to break out of check answer if some questions are not answered
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].playerChoice === "") {
        alert("You have unanswered questions!")
        console.log("you have unanswered questions")
        return 
      }
    }
    handleAnswerCheck()

    // console.log("Answers Checked")
    const allCorrect = questions.every(quesObj => quesObj.isCorrect === true ? true : false)
    // console.log(allCorrect)


    const playerAnswers = questions.map(ques => ques.playerChoice)
    // console.log(playerAnswers)

    const correctAnswers = questions.map(ques => ques.answerCorrect)
    // console.log(correctAnswers)

    
    let unansweredQuestions = []
    for (let i = 0; i < playerAnswers.length; i++) {
      if (playerAnswers[i] === "") {
        unansweredQuestions.push(i+1)
        console.log(` Please Answer Question #${i + 1}`)
        console.log(unansweredQuestions)
      }
    }

    if (playerAnswers.every((val, idx) => val === correctAnswers[idx])) {
      console.log("All Correct")
      console.log("Great Job!!")
    } else {
      console.log("you made mistakes")
    }
  }

  return (
    <main>
      {
        gameStart ?
          <QuestionsPage
            category={category}
            difficulty={difficulty}
            questions={questions}
            answerSelect={answerSelect}
            checkAns={checkAns}
            answerCheckedState={answersChecked}
          /> :
          <Start
            handleStart={handleStartQuiz}
            handleCategoryChange={handleCategoryChange}
            category={category}
            difficulty={difficulty}
            handleDifficultyChange={handleDifficultyChange}
          />
      }
    </main>
  )
}