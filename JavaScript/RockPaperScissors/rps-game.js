/*
Learning how to write JS that lets me play a 5rd game against the pc of Rock Paper Scissors.

1. The user can input rock, paper, scissors that is not case sensitive
2. A function needs to be created that allows the computer to make a choice
3. The result for user/computer winner will be displayed.
4. Tie rounds need to be counted in code
5. These steps will be repeated for 5 rounds.
6. All permeatations need to be factored into if/else statements

*/


//begin with a function called getComputerChoice 
//that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
/*
function getComputerChoice() {
   let choices = ["Rock", "Paper", "Scissors"];
   let computerChoice = choices(Math.floor(Math.random() * 3));
   return computerChoice
}

//Player choice
function getPlayerChoice() {
    let playerInput = prompt("type of choice...");
    let result = playerInput.toLowerCase();
    return result;
}

//Playing 5 rounds
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
        return "IT'S A TIE";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! paper beats rock`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! rock beats scissors`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose!scissors beats paper`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! paper beats rock`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! rock beats scissors`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! scissors beats paper`;
      }
    }
  
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));   


function game() {
    let computerScore = 0,
    playerScore = 0;
}

for (i = 0; i < 3; i++) {
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
      console.log(`computer: ${computerScore} | player: ${playerScore}`);
    } else if (result.includes("lose")) {
      computerScore++;
      console.log(`computer: ${computerScore} | player: ${playerScore}`);
    }
    console.log(
      "Final Results: Player: " + playerScore + " Computer: " + computerScore
    );
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game.");
    } else {
      console.log("The game was an overall tie.");
    }
  }

game(); */

// function for selecting CSS class
const selectClass = function (el) {
  return document.querySelector(el);
};

// function for the text declaring who won the round.
const declaringRoundResult = function () {
  return `You ${roundWinner === 0 ? `won` : `lost`}! You chose ${
    playerChoice === 0 ? `rock` : playerChoice === 1 ? `paper` : `scissors`
  }${roundWinner === 0 ? ` and` : `, but`} the computer chose ${
    computerChoice === 0 ? `rock` : computerChoice === 1 ? `paper` : `scissors`
  }.`;
};

//Function for ending the round, checking whether winning condition is achived end preparing for new round.
const endRound = function () {
  setTimeout(() => {
    if (playerScore === 5) {
      gameScreen.classList.add(`hidden`);
      roundResult.classList.add(`hidden`);
      endScreen.classList.remove(`hidden`);
      finalResult.textContent = `Congratulations! You won the game!`;
    } else if (computerScore === 5) {
      gameScreen.classList.add(`hidden`);
      roundResult.classList.add(`hidden`);
      endScreen.classList.remove(`hidden`);
      finalResult.textContent = `You lost the game!`;
    } else {
      roundPlayed = false;
      roundResult.classList.add(`hidden`);
    }
  }, 2500);
};

// variables for DOM manipulation
const introScreen = selectClass(`.intro-screen`),
  gameScreen = selectClass(`.game-screen`),
  startButton = selectClass(`.btn-start`),
  roundResult = selectClass(`.round-result`),
  roundResultText = selectClass(`.round-result-text`),
  finalResult = selectClass(`.final-result`),
  endScreen = selectClass(`.end-screen`),
  playAgain = selectClass(`.btn-again`),
  playerScoreel = selectClass(`.player-score`),
  computerScoreel = selectClass(`.computer-score`);
let playerScore = 0,
  computerScore = 0,
  playerChoice,
  computerChoice,
  roundPlayed = false, // This line is in order to make buttons non-functional after a round is played.
  roundWinner;

// Below code block is for the function of start button and initializing the game.
startButton.addEventListener(`click`, () => {
  introScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});

// Below code block is for game logic. For loop is for applying it to all 3 buttons.
// 0 = rock, 1 = paper, 2 = scissors
for (let i = 0; i < 3; i++) {
  selectClass(`.btn-${i}`).addEventListener(`click`, function () {
    if (!roundPlayed) {
      roundResult.classList.remove(`hidden`);
      roundPlayed = true;
      playerChoice = i;
      computerChoice = Math.trunc(Math.random() * 3);
      if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
      ) {
        roundWinner = 0;
        playerScore++;
        roundResultText.textContent = declaringRoundResult();
        endRound();
      } else if (
        (computerChoice === 0 && playerChoice === 2) ||
        (computerChoice === 1 && playerChoice === 0) ||
        (computerChoice === 2 && playerChoice === 1)
      ) {
        roundWinner = 1;
        computerScore++;
        roundResultText.textContent = declaringRoundResult();
        endRound();
      } else if (playerChoice === computerChoice) {
        roundResultText.textContent = `It's a draw! Choose again.`;
        roundPlayed = false;
      }
      playerScoreel.textContent = playerScore;
      computerScoreel.textContent = computerScore;
    }
  });
}

//Below code is for resetting the conditions and playing the game again.
playAgain.addEventListener(`click`, function () {
  playerScore = 0;
  computerScore = 0;
  roundPlayed = false;
  selectClass(`.player-score`).textContent = 0;
  selectClass(`.computer-score`).textContent = 0;
  endScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});