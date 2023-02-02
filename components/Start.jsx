import React from "react";
import Footer from "./Footer";


function Start(props) {

  return (
    <section className="start--main" >
      <nav>

      </nav>

      <div className="start--quiz--container">

        <h1 className="start--title">
          Quizzical!
        </h1>
        
        <div className="start--selection--container">
          <p className="start-description">
            Choose your Settings:
          </p>

          <div >
            <label htmlFor="chooseAmount">Amount:</label>
            <select
              name="amount"
              id="chooseAmount"
              value={props.amount}
              onChange={props.handleAmountChange}
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={11}>10</option>
            </select>
          </div>
          <div >
            <label htmlFor="chooseCategory">Category:</label>
            <select
              name="category"
              id="chooseCategory"
              value={props.category}
              onChange={props.handleCategoryChange}
            >
              <option value={9}>General</option>
              <option value={15}>Video Games</option>
              <option value={11}>Films</option>
            </select>
          </div>

          <div className="start--selection--container">
            <label htmlFor="chooseDifficulty">Difficulty:</label>
            <select
              name="difficulty"
              id="chooseDifficulty"
              value={props.difficulty}
              onChange={props.handleDifficultyChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="start--selection--container">
            <label htmlFor="chooseDifficulty">Type:</label>
            <select
              name="type"
              id="chooseType"
              value={props.type}
              onChange={props.handleTypeChange}
            >
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True or False</option>
            </select>
          </div>



        </div>

        <button className="btn btn--start"
          onClick={props.handleStart}>
          Start Quiz!
        </button>

        <Footer />
      </div>

    </section>
  )
}



export default Start
