/* takes no input
* returns a random choice of ['r', 'p', 's']
*/
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
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

/**
 * main game functionality
 */
function game() {
    const choices = document.querySelectorAll(".choice_panel__choices .choice");

    // keeps track of user and computer score
    let userScore = 0;
    let computerScore = 0;
    let userSelection;

    // when user clicks a btn 
    for (const choice of choices) {
        choice.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            userSelection = choice.attributes['data-choice'].value;

            // play a round 
            let winner = playRound(userSelection, computerSelection);
            // increment winner score
            if (winner == "user") {
                userScore++;
            } else if (winner == "computer") {
                computerScore++;
                
            }

            if (userScore >= 5 || computerScore >= 5) {
                delcareFinalWinner(winner);
                return 0;
            } else {
                // show the winner
                showWinner(winner, computerSelection, userSelection, userScore, computerScore);
            }

        });
    }


    // if computer or user got 5 points
    // end the game
    // otherwise show the current score
}

/**
 * 
 * @param {string} winner 
 * @param {string} computerSelection 
 * @param {string} userSelection 
 * @param {number} userScore 
 * @param {number} computerScore 
 * 
 * show the winner and updates the DOM
 */
function showWinner(winner, computerSelection, userSelection, userScore, computerScore) {
    const resultDiv = document.querySelector(".result");
    const userChoiceDiv = document.querySelector("#userChoiceDiv");
    const computerChoiceDiv = document.querySelector("#computerChoiceDiv");
    const resultMsg = document.querySelector(".result-msg");
    const userscoreSpan = document.querySelector("#userscore");
    const computerscoreSpan = document.querySelector("#computerscore");

    // show the result 
    resultDiv.classList.remove("hidden");

    let choices = {
        'r': "✊",
        'p': "✋",
        's': "✌"
    }

    userChoiceDiv.textContent = choices[userSelection];
    computerChoiceDiv.textContent = choices[computerSelection];

    userscoreSpan.textContent = userScore;
    computerscoreSpan.textContent = computerScore;


    if (winner == "user") {
        resultMsg.textContent = "congrats you won this round against machines";
        resultMsg.classList.add("result-msg--win");
        resultMsg.classList.remove("result-msg--tie");
        resultMsg.classList.remove("result-msg--lose");
    } else if (winner == "computer") {  
        resultMsg.textContent = "oh no, computers won this round but not war";
        resultMsg.classList.add("result-msg--lose");
        resultMsg.classList.remove("result-msg--tie");
        resultMsg.classList.remove("result-msg--win");
    } else {
        resultMsg.textContent = "it's a tie!";
        resultMsg.classList.add("result-msg--tie");
        resultMsg.classList.remove("result-msg--win");
        resultMsg.classList.remove("result-msg--lose");
    }



}

function delcareFinalWinner(winner) {
    console.log(winner);
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
// window.addEventListener("DOMContentLoaded", startIntro)

game();