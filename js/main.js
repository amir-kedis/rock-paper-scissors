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
function userSelection() {
    const choices = document.querySelectorAll(".choice_panel__choices .choice");

    for (const choice of choices) {
        choice.addEventListener('click', () => {
            console.log(choice.attributes['data-choice'].value);
            return choice.attributes['data-choice'].value;
        });
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

    for (let i = 0; i < rounds; i++) {
        let userChoice = userSelection();
        let computerChoice = getComputerChoice();

        let winner = playRound(userChoice, computerChoice);

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

/* makes the intro story at the beginning 
 * shows every paragraph in order one by one
 * returns nothing  */
function startIntro() {
    const paras = document.querySelectorAll(".intro p");

    // fade first p
    paras[0].classList.add("fadein");


    // fade out the first p and unhide the second p
    setTimeout(() => {
        paras[0].classList.add("fadeout");
        paras[0].addEventListener("transitionend", () => {
            paras[0].classList.add("hidden");
            paras[1].classList.remove("hidden");
        })
    }, 2000)

    // fade out the second p and unhide the last p
    setTimeout(() => {
        paras[1].classList.add("fadein");

        paras[1].addEventListener("transitionend", () => {
            paras[1].classList.add("fadeout");
            paras[1].addEventListener("transitionend", () => {
                paras[1].classList.add("hidden");
                paras[2].classList.remove("hidden");
            });
        });
    }, 4000);

    // fade in and out the last p and hide the whole intro section
    setTimeout(() => {
        paras[2].classList.add("fadein");

        paras[2].addEventListener("transitionend", () => {
            paras[2].classList.add("fadeout");
            paras[2].addEventListener("transitionend", () => {
                paras[2].classList.add("hidden");
                document.querySelector(".intro").classList.add("hidden");
            });
        });
    }, 8000);
}

// intro code
window.addEventListener("DOMContentLoaded", startIntro)

userSelection();