const rps = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('What do you choose?', ''.toLowerCase());
let computerSelection = computerPlay();



// Computer randomly picks rock, paper, scissors
function computerPlay() {
    const randomPlay = Math.floor(Math.random() * rps.length);
    const choice = rps[randomPlay];

    return choice;
}

// Play a round of rock, paper or scissors
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' & computerSelection === 'paper') {
        return ('You lose! Paper beats Rock');
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        return ('You win! Rock beats Scissors');
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        return ('You lose! Scissors beats Paper');
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        return ('You win! Paper beats Rock');
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        return ('You lose! Rock beats Scissors');
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        return ('You win! Scissors beats Paper');
    }

}



console.log(playRound(playerSelection, computerSelection));



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


