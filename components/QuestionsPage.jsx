import React from 'react'
import Question from './Question'
import Header from "./Header"
import Footer from "./Footer"
import { nanoid } from "nanoid"

//questions props is trivia state array from <App> fetch 
function QuestionsPage({ questions }) {
  //State for selecting answers
  const [selected, setSelected] = React.useState(false)
  
  //Check Answer on button click
  function checkAns() {
    console.log("Answers Checked")
  }

  //Decoding incoming data and pushing to new array of objects
  let sanitizedQuestionArr = questions.map(obj => {
    return {
      id: nanoid(),
      question: atob(obj.question),
      answer: atob(obj.correct_answer),
    }
  })
  console.log(sanitizedQuestionArr)
  
  const btnStyles = {
    backgroundColor: selected ? "black" : "white"
  }


  //Mapping Data and creating each question card
  //nanoID for key
  const questionCard = sanitizedQuestionArr.map((questionObj, ind) => {
    return (
      <Question
        key={nanoid()}
        id={questionObj.id}
        ask={questionObj.question}
        ans={questionObj.answer}
        btnStyles={btnStyles}
        selected={selected}
      />
    )
  })

  return (
    <>
      <Header/>

      <section className="question--main">
        <div className="question--container">
          {questionCard}
        </div>

        <button
          className="btn btn--check--ans"
          onClick={checkAns}
        >
          Commit Answers
        </button>

      </section>
      <Footer/>
    </>
  )
}


export default QuestionsPage
