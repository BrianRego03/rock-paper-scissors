let playerName;
let playerSelection;
let computerSelection;
let matchVar;
let computerScore=0;
let playerScore=0;
let roundNumber=0;

function displayHand(handReading)
    {   
        if(handReading==0)
            console.log(playerName +" chose Rock");
        else if(handReading==1)
            console.log(playerName +" chose Paper");
        else
            console.log(playerName +" chose Scissor");
    }

function playerDecision(playerPick)
    {   
        let playerHand;
        if(playerPick==0)
            playerHand="Rock";
        else if (playerPick==1)
            playerHand="Paper";
        else
            playerHand="Scissor";  
        return playerHand;      
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
        let playerHandName=playerDecision(playerSelection);
        let computerHandName=playerDecision(computerSelection);
        matchVar=computerSelection.toString() + playerSelection.toString();
        if(matchVar=="01"||matchVar=="12"||matchVar=="20")
            {
                console.log("You won round " + roundNumber + "! "
                            + playerHandName +" beats " + computerHandName + "!");
                playerScore++;
            }
        else if(matchVar=="02"||matchVar=="10"||matchVar=="21")
            {
                console.log("You lost round " + roundNumber + "! "
                            + computerHandName +" beats " + playerHandName + "!");
                computerScore++;
            }    
        else
            {
                console.log("Round " + roundNumber + " is a tie!");
            }            
        return matchVar;  
    }    
 





