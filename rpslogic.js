let playerName;
let playerSelection;
let computerSelection;

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
        computerSelection = Math.floor(Math.random()*3);
        displayHand(computerSelection);
        return computerSelection;
    }

function getPlayerChoice()
    {   
        playerName="You"
        let playerInput= prompt("Rock, Paper or Scissor?");
        if(playerInput.toLowerCase()=="rock")
            {playerSelection=0;
             displayHand(playerSelection);}

        else if(playerInput.toLowerCase()=="paper")
            {playerSelection=1;
             displayHand(playerSelection);}

        else
            {playerSelection=2;
             displayHand(playerSelection);}
        return playerSelection;
    }




