import React from "react";
import Selection from "./Selection";
import { getWinner } from "../utils/Game";

function Outcome({selected, gameSelected, resetGame}) {
  let winner = getWinner(selected, gameSelected);
  let outcome;

  if (winner === "tie") {
    outcome = "draw";
  } else if (winner === "user") {
    outcome = "you win";
  } else {
    outcome = "you lose";
  }

  console.log(selected,gameSelected,winner);
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
