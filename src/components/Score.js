import React from 'react';


function Score({score}) {
  
  return (
    <div className="score">
        <div className="logo">
            <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="score__details">
            <h1>score</h1>
            <p>{score}</p>
        </div>
    </div>
  )
}

export default Score