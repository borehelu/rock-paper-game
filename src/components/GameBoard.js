import React, { useEffect, useState } from "react";
import Selection from "./Selection";

function GameBoard() {
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState();
  const [gameSelected, setGameSeleted] = useState("rock");

  let outcome = "win";

  useEffect(() => {
    if (selected) {
      setIsSelected((prev) => !prev);
    }
  }, [selected]);

  if (!isSelected) {
    return (
      <div className="board">
        <Selection selectionType="paper" setSelected={setSelected} />
        <Selection selectionType="scissors" setSelected={setSelected} />
        <Selection selectionType="rock" setSelected={setSelected} />
      </div>
    );
  } else {
    return (
      <>
      <div className="selected__board">
        <div>
          <Selection selectionType={selected} winner="rock"/>
          <p>you picked</p>
        </div>
        <div>
          <Selection selectionType={gameSelected} winner="rock"/>
          <p>the house picked</p>
        </div>
      </div>
      <div className="match__details">
        <h1>you {outcome}</h1>
        <button className="btn btn__playagain" onClick={()=>setIsSelected(prev => !prev)}>play again</button>
      </div>
      </>
    );
  }
}

export default GameBoard;
