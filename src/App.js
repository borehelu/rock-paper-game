import { useState } from "react";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);

  function increaseScore(){
    setScore(prevScore => prevScore + 1);

  }

  function decreaseScore(){
    setScore(prevScore => {
      if(prevScore !== 0){
        return prevScore -1;
      }else{
        return 0;
      }
    });
  }

  return (
    <div className="container">
      <Score score={score}/>
    </div>
  );
}

export default App;
