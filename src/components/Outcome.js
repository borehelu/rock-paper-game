import React,{useState, useEffect} from "react";
import Selection from "./Selection";
import { getWinner } from "../utils/Game";

function Outcome({selected, gameSelected, resetGame, setWinner}) {
 let winner = getWinner(selected,gameSelected);
 let outcome;

 setWinner(winner);

  if (winner === "tie") {
    outcome = "draw";
  } else if (winner === "user") {
    outcome = "you win";
    
  } else {
    outcome = "you lose";
    
  }

  
  
  
  return (
    <>
      <div className="selected__board">
        <div>
          <Selection
            selectionType={selected}
            winner={winner === "user" ? true : false}
          />
          <p>you picked</p>
        </div>
        <div>
          <Selection
            selectionType={gameSelected}
            winner={winner === "house" ? true : false}
          />
          <p>the house picked</p>
        </div>
      </div>
      <div className="match__details">
        <h1>{outcome}</h1>
        <button
          className="btn btn__playagain"
          onClick={resetGame}
        >
          play again
        </button>
      </div>
    </>
  );
}

export default Outcome;
