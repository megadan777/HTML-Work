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

function getComputerChoice() {
   let myChoice = ["Rock", "Paper", "Scissors"];
   let computerChoice = choices(Math.floor(Math.random() * choices.length))
}

//Player choice
function getPlayerChoice() {
    let playerInput = prompt("type of choice...");
    let result = playerInput.toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));