let playerName;

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
        let computerHand = Math.floor(Math.random()*3);
        displayHand(computerHand);
        return computerHand;
    }

