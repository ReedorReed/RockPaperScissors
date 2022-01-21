const rps = ['Rock', 'Paper', 'Scissors'];


function computerPlay() {
    const randomNumber = Math.floor(Math.random() * rps.length);
    const choice = rps[randomNumber];

    return choice;
}

