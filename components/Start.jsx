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
        <div>
          <p className="start-description">
            Description
          </p>

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
