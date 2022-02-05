const rps = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('What do you choose?').toLowerCase();
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let lose = 'You lose!';
let win = 'You win!';
let draw = 'Draw!';



// Computer randomly picks rock, paper, scissors
function computerPlay() {
    const randomPlay = Math.floor(Math.random() * rps.length);
    const choice = rps[randomPlay];

    return choice;
}

// Play a round of rock, paper or scissors
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return (draw);
    } else if (playerSelection === 'rock' & computerSelection === 'paper') {
        computerScore++;
        return (lose + ' Paper beats Rock');
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        playerScore++;
        return (win + ' Rock beats Scissors');
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        computerScore++;
        return (lose + ' Scissors beats Paper');
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        playerScore++;
        return (win + ' Paper beats Rock');
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        computerScore++;
        return (lose + ' Rock beats Scissors');
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        playerScore++;
        return (win + ' Scissors beats Paper');
    }

}

console.log(playRound(playerSelection, computerSelection));

// Function that keeps score of game

function gameScore(){
    let result = playRound();
    if (result === win) {
        playerScore++;
    } else if (result = draw) {
        draws++;
    } else {
        computerScore++;
    }
    
    if (playerScore == 5) {
        console.log(win);
        return;
    }
    if (computerScore == 5) {
        console.log(lose);
        return;
    }
    }

// Create a function called game that loops the game 5 times and keeps score

for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log('Your score is ' + playerScore);
    console.log('Computer score is ' + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}
















// Use (''.toLowerCase()) to make the playerSelection case incensitive


// (r === s || p === r || s === p) 


// const rock > scissors ; 
// const paper > rock ;
// const scissors > paper ;

// const r = 'rock';
// const s = 'scissors';
// const p = 'paper';








// function hi(c, b) {
//     c = ('hello ');
//     b = ('world!');

//     return (c+b);
// }


