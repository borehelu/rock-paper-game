export function getWinner(selected,gameSelected){
    if(selected === gameSelected){
      return 'tie';
    }
    
    switch (selected) {
      case "rock":
          if(gameSelected === "paper"){
            return 'house';
          }else{
            return 'user';
          }
      case "paper":
        if(gameSelected === "scissors"){
          return 'house';
        }else{
          return 'user';
        }

      case "scissor":
        if(gameSelected === "rock"){
          return 'house';
        }else{
          return 'user';
        }
      default:
        break;
    }
     
  }


export  function gameSelect(){
    let gameSelected = Math.floor(Math.random()*3) + 1;

    switch (gameSelected) {
      case 1:
        return "rock";
        
      case 2:
        return "paper";
        
      case 3:
        return "scissors";
          
      default:
        break;
    }
  }