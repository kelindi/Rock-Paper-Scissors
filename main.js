let playerScore = 0;
let computerScore = 0;
let s = 'let the games begin!'


function getRandomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareChoice(pChoice, cChoice) {
    switch (pChoice) {
        case cChoice:
            s = "It's a Tie!";
            break;
        case 'rock':
            if (computerChoice == 'paper') {
                s = "You Lose! Paper beats Rock";
                computerScore += 1;
            }
            else {
                s = " You Win! Rock beats Scissors";
                playerScore += 1;
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                s = "You Lose! Scissors beats Paper";
                computerScore += 1;
            }
            else {
                s = "You Win! Paper beats Rock";
                playerScore += 1;
            }
            break;
        case 'scissors':
            if (computerChoice == 'rock') {
                s = "You Lose! Rock beats Scissors";
                computerScore +=1;
            }
            else {
                s = "You Win! Paper beats Rock";
                playerScore +=1;
            }
            break;
    }
    console.log(playerScore, computerScore)
    return s;
}
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[getRandomint(0, 2)];g
}

function playRound(choice) {
    computerChoice = computerPlay();
    statememt = compareChoice(choice, computerChoice);
    console.log(statememt);
    return statememt

}






//code for page functionality
window.onload = function(){
    var startBtn = document.querySelector('#start');
    var activeGame = document.querySelectorAll('.activeGame');
    const choices = document.querySelectorAll('.choice');
    var score = document.querySelector('#score')
    var reset = document.querySelector('#reset')
    var status = document.querySelector('#status')

    startBtn.addEventListener('click',()=>{
        startBtn.classList.toggle('visible'); // remove start button from window
        activeGame.forEach(function(element){ element.classList.toggle('visible')}); // show game elements
        update();
    });

    choices.forEach((choice) => {

        // and for each one we add a 'click' listener
        choice.addEventListener('click', (e) => {
            playRound(choice.id);
            update();

        });
      });
    function update() {
        score.textContent = (`${playerScore} - ${computerScore}`);
        status.textContent =(s);
    }
    
    reset.addEventListener('click',()=>{
        resetScore();
        update();
    })
    function resetScore(){
        playerScore = 0;
        computerScore = 0;
    }
}

