import React from "react";
import Footer from "./Footer";


function Start(props) {

  const styles = {
    display: "flex",
  }

  return (
    <section className="start--main" style={styles}>
      <nav>

      </nav>

      <div className="start--quiz--container">

        <h1 className="start--title">
          Quizzical!
        </h1>
        <p className="start-description">
          Description
        </p>

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
