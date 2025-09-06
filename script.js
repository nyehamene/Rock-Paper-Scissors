function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    default: return "scissors"
  }
}

function getHumanChoice() {
  let choice = prompt("Pick rock, paper, scissors: ");
  return choice.toLowerCase()
}

function playRound(leaderboard) {
  let ComputerChoice = getComputerChoice()
  let HumanChoice = getHumanChoice()
  logic(HumanChoice, ComputerChoice, leaderboard)
}

function logic(mychoice, compchoice, gameState) {
  if ((mychoice == "rock" && compchoice == "scissors")
    || (mychoice == "paper" && compchoice == "rock")
    || (mychoice == "scissors" && compchoice == "paper")) {
    console.log("You win! " + mychoice + " beats " + compchoice)
    gameState.HumanScore++
  } else if (mychoice == compchoice) {
    console.log("Draw. You both picked " + mychoice + ".")
  } else {
    console.log("You lose. " + compchoice + " beats " + mychoice)
    gameState.ComputerScore++
  }
}

function main() {
  let leaderboard = {
    HumanScore: 0,
    ComputerScore: 0,
  }

  for (let i = 0; i < 5; i++) {
    playRound(leaderboard)
  }

  let HumanScore = leaderboard.HumanScore
  let ComputerScore = leaderboard.ComputerScore

  if (HumanScore > ComputerScore) {
    alert("You Won! " + HumanScore + "-" + ComputerScore);
  } else if (HumanScore < ComputerScore) {
    alert("You lose, Computer Won. " + HumanScore + "-" + ComputerScore);
  } else {
    alert("Draw. " + HumanScore + "-" + ComputerScore);
  }
}

// The best way to run this would be:
//
// document.addEventListener("DOMContentLoaded", main)
//
// but, you can just call the main function like have done below
main()
