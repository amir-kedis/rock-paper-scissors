/* takes no input
* returns a random choice of ['r', 'p', 's']
*/
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
