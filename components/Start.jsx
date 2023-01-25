import React from "react";


function Start(props) {

  const styles = {
    display: "flex",
  }

  return (
    <div className="start--main" style={styles}>

      <h1 className="start--title">
        Quizzical
      </h1>
      <p className="start-description">
        Description
      </p>
      <button className="start-button"
      onClick={props.handleStart}>
        Start Quiz
      </button>

    </div>
  )
}



export default Start
