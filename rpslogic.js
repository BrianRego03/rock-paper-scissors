let playerName;
let playerSelection=getPlayerChoice();
let computerSelection=getComputerChoice();
let matchVar;

function displayHand(handReading)
    {   
        if(handReading==0)
            console.log(playerName +" chose Rock");
        else if(handReading==1)
            console.log(playerName +" chose Paper");
        else
            console.log(playerName +" chose Scissor");
    }


function getComputerChoice()
    {   
        playerName="Computer";
        let computerChoice;
        computerSelection = Math.floor(Math.random()*3);
        displayHand(computerChoice);
        return computerChoice;
    }

function getPlayerChoice()
    {   
        playerName="You";
        let playerChoice;
        let playerInput= prompt("Rock, Paper or Scissor?");
        if(playerInput.toLowerCase()=="rock")
            {playerChoice=0;
             displayHand(playerChoice);}

        else if(playerInput.toLowerCase()=="paper")
            {playerChoice=1;
             displayHand(playerChoice);}

        else
            {playerSelection=2;
             displayHand(playerChoice);}
        return playerChoice;
    }
    
function playRound(playerSelection,computerSelection)
    {
        matchVar=playerSelection.tostring()+computerSelection.tostring();
        return matchVar;  
    }    




