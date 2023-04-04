
displayHand(handReading)
    {
        if(handReading==1)
            console.log("Computer chose Rock");
        else if(handReading==2)
            console.log("Computer chose Paper");
        else
            console.log("Computer chose Rock");
    }


getComputerChoice()
    {
        computerHand=Math.floor(Math.random()*3);
        displayHand(computerHand);
        return computerHand;
    }