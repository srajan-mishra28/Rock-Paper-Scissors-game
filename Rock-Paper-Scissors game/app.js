let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result > p");
let body = window.document.styleSheets[0];
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCPUchoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randNum = Math.floor(Math.random() * 3); // Generate random # between 0-2.
  return choices[randNum]; // Returns value of array slot based on randNum
}
function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML = `${userChoice} beats ${cpuChoice}. You win!`;
}
function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML = `${userChoice} falls to ${cpuChoice}. CPU wins!`;
}
function draw(userChoice, cpuChoice) {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML = `It's a draw, partner.`;
}

function game(userChoice) {
  const cpuChoice = getCPUchoice();
  switch (userChoice + cpuChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, cpuChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, cpuChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, cpuChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game("Rock");
  })
  paper_div.addEventListener('click', function(){
    game("Paper");
  })
  scissors_div.addEventListener('click', function(){
    game("Scissors");
  })
}



main();