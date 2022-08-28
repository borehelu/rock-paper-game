import { useState, useEffect } from "react";
import Score from "./components/Score";
import GameBoard from "./components/GameBoard";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(1);
  const [winner, setWinner] = useState();

  useEffect(() => {
    if(winner){
      if(winner === "user"){
        setScore(score => score + 1);
      } else if( winner === "house"){
        setScore(score => {
          if(score > 0){
            return score - 1;
          }else{
            return 0;
          }
        })
      }

    }
  
   
  }, [winner])
  


  return (
    <div className="container">
      <Score score={score}/>
      <GameBoard setWinner={setWinner}  />
      <Rules />
    </div>
  );
}

export default App;
