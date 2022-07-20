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
