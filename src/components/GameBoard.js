import React, { useEffect, useState } from "react";
import Option from "./Option";
import Outcome from "./Outcome";
import {gameSelect} from '../utils/Game';

function GameBoard({setWinner}) {
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState();
  const [gameSelected, setGameSelected] = useState();

  let homeSelection = gameSelect();

  useEffect(() => {
    if (selected) {
      setIsSelected((prev) => !prev);
      setGameSelected(homeSelection);
    }
  }, [selected]);


  function resetGame(){
    setIsSelected(prev => !prev);
    setSelected("");
    setGameSelected("");
  }
  
  if (!isSelected) {
    return (
      <div className="board">
        <Option selectionType="paper" setSelected={setSelected} />
        <Option selectionType="scissors" setSelected={setSelected} />
        <Option selectionType="rock" setSelected={setSelected} />
      </div>
    );
  } else if(selected && gameSelected && isSelected){
    return (
      <Outcome selected={selected} gameSelected = {gameSelected} resetGame={resetGame} setWinner={setWinner}  />
    );
  }
}

export default GameBoard;
