const rps = ['Rock', 'Paper', 'Scissors'];


function computerPlay() {
    const randomNumber = Math.floor(Math.random() * rps.length);
    const choice = rps[randomNumber];

    return choice;
}

function playRound (playerSelection, computerSelection) {
    // possibly use if statements 
    if ('rock' == 'scissors' || 'paper' == 'rock' || 'scissors' == 'paper') {
        return ('You lose! Paper beats rock');
    }

}
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound());






// const rock > scissors ; 
// const paper > rock ;
// const scissors > paper ;

// function hi(c, b) {
//     c = ('hello ');
//     b = ('world!');

//     return (c+b);
// }


