const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".choices button");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button");

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id.toLowerCase();
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    updateScores();

    // Add animation
    resultDisplay.classList.remove("fade-in");
    void resultDisplay.offsetWidth; // Trigger reflow
    resultDisplay.classList.add("fade-in");
  })
);

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    result = "You Lost!";
    computerScore++;
  } else {
    result = "You Win!";
    userScore++;
  }
  resultDisplay.innerHTML = result;
}

function updateScores() {
  userScoreDisplay.innerHTML = `User Score: ${userScore}`;
  computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
}

resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  resultDisplay.innerHTML = "Make your choice!";
  updateScores();
});
