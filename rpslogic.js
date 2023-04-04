let playerName;
let playerSelection=getPlayerChoice();
let computerSelection=getComputerChoice();
let matchVar;
let computerScore;
let playerScore;

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
        computerChoice = Math.floor(Math.random()*3);
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
            {playerChoice=2;
             displayHand(playerChoice);}
        return playerChoice;
    }
    
function playRound(playerSelection,computerSelection)
    {
        matchVar=computerSelection.toString() + playerSelection.toString();
        if(matchVar=="01"||matchVar=="12"||matchVar=="20")
            {
                console.log("You won this round! ")
            }
        else if(matchVar=="02"||matchVar=="10"||matchVar=="21")
            {
                console.log("You lost this round! ")
            }    
        else
            {
                console.log("It's a tie!")
            }            
        return matchVar;  
    }    
playRound(playerSelection,computerSelection); 

function game()
    {

    } 




