console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice(callback) {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please enter a 'Rock, Paper or Scissors: ", (answer) => {
    const humanChoice = answer.trim().toLowerCase();
    console.log(`You chose: ${humanChoice}`);
    rl.close();
    callback(humanChoice);
  });
}

function playRound(humanChoice, computerChoice) {
  console.log(`Computer chose: ${computerChoice}`);

  if (computerChoice.toLowerCase() === humanChoice) {
    console.log("It's a draw!");
  } else if (
    (computerChoice === "Rock" && humanChoice === "scissors") ||
    (computerChoice === "Paper" && humanChoice === "rock") ||
    (computerChoice === "Scissors" && humanChoice === "paper")
  ) {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }

  console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

getHumanChoice((humanChoice) => {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
