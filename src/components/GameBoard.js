import React, { useEffect, useState } from "react";
import Option from "./Option";
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


  function gameSelect(){
    let gameSelected = Math.floor(Math.random()*3) + 1;

    switch (gameSelected) {
      case 1:
        setGameSeleted("rock");
        break;
      case 2:
        setGameSeleted("paper");
        break; 
      case 3:
        setGameSeleted("scissor");
        break;   
      default:
        break;
    }
  }
  
  if (!isSelected) {
    return (
      <div className="board">
        <Option selectionType="paper" setSelected={setSelected} />
        <Option selectionType="scissors" setSelected={setSelected} />
        <Option selectionType="rock" setSelected={setSelected} />
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
