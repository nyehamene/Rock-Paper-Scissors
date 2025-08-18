function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    switch(choice){
        case 0: ComputerChoice = "rock";
        break;
        case 1: ComputerChoice = "paper";
        break;
        case 2: ComputerChoice = "scissors"
        break;
    }
}
function getHumanChoice(){
    let choice = prompt("Pick rock, paper, scissors: ");
    HumanChoice = choice.toLowerCase()
}
function playRound(){
    getComputerChoice()
    getHumanChoice()
    logic(HumanChoice, ComputerChoice)
}
function logic(mychoice, compchoice){
    if ((mychoice == "rock" && compchoice == "scissors") || (mychoice == "paper" && compchoice == "rock") || (mychoice == "scissors" && compchoice == "paper")){
        console.log("You win! "+mychoice+" beats "+compchoice)
        ++HumanScore
    }
        
    else if(mychoice == compchoice){
        console.log("Draw. You both picked " + mychoice + ".")
    }
    else{
        console.log("You lose. " + compchoice + " beats " + mychoice)
        ++ComputerScore
    }
}

let ComputerChoice, HumanChoice, HumanScore = 0, ComputerScore = 0
let i
for(i=0; i<5; i++)
    playRound()

if (HumanScore > ComputerScore)
    alert("You Won! "+HumanScore+"-"+ComputerScore);
else if (HumanScore < ComputerScore)
    alert("You lose, Computer Won. "+HumanScore+"-"+ComputerScore);
else
    alert("Draw. "+HumanScore+"-"+ComputerScore);
        
    

