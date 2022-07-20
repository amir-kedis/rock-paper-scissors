/* takes no input
* returns a random choice of ['r', 'p', 's']
*/
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

/* takes no input
* returns user choice ['r', 'p', 's'] 
* asks user for his input 
* if he enters a proper answer return its abbreviation
* else it calls itself again and asks user again
*/
function userSelection() 
{
    let input = prompt("enter your choice? humanity depends on you");

    if (input.toUpperCase() == "ROCK") {
        return 'r';
    } else if (input.toUpperCase() == "PAPER") {
        return 'p';
    } else if (input.toUpperCase() == "SCISSORS") {
        return 's';
    } else {
        return userSelection();
    }
}

/* takes the choice of computer and user as a char of ['r', 'p', 's'] 
* returns the winner as a string of ["tie","computer","user","unknown"]
*/
function playRound(userSelection, computerSelection) {
    let winner;

    if (
        userSelection == computerSelection
    ) {
        winner = "tie";
    } else if (
        (computerSelection == 'p' && userSelection == 'r') ||
        (computerSelection == 's' && userSelection == 'p') ||
        (computerSelection == 'r' && userSelection == 's')
    ) {
        winner = "computer";
    } else if (
        (userSelection == 'p' && computerSelection == 'r') ||
        (userSelection == 's' && computerSelection == 'p') ||
        (userSelection == 'r' && computerSelection == 's')
    ) {
        winner = "user";
    } else {
        winner = "unknown";
    }
    return winner;
}

/* takes the number of rounds you want to play
* then loops every time and plays a round 
* keeps track of scores
* prints who won each round and at the end
* returns the final winner as a string
*/
function game(rounds) {
    let computerScore = 0;
    let userScore = 0;

    for (let i = 0; i < rounds;i++) {
        let userChoice = userSelection();
        let computerChoice = getComputerChoice();
        
        let winner = playRound(userChoice, computerChoice)

        if (winner == "user") {
            userScore++;
        } else if (winner == "computer") {
            computerScore++;
        }

        console.log(`you chose ${userChoice} and computer chose ${computerChoice}`);

        if (winner == "user") {
            console.log("congrats you won this round against machines");
        } else if (winner == "computer") {
            console.log("oh no, computers won this round but not war");
        } else {
            console.log("it's a tie!");
        }

        console.log(`your score now is ${userScore}`);
        console.log(`computer score now is ${computerScore}`);
        console.log("***************************************");
    }

    if (userScore > computerScore) {
        console.log("congrats you won this war against machines, but be worry machines will return");
        return "user";
    } else if (computerScore > userScore) {
        console.log("it's the end machines have enslaved humanity! unless we make a rebellion?");
        return "computer";
    } else {
        console.log("no one won, humans and computers learnt to live together.");
        return "tie";
    }
}

// start the game with 5 rounds
game(5);
