/*==================================================================
=====  variables that update games totals & id's the body      =====
====================================================================*/
let wins = 0;
let losses = 0;
let ties = 0;
let gameScreen = document.getElementById('rockPaperScissors');

console.log('To play the \'rock, paper, scissors game\' please press the \" r, p or s \" key\'s: \(values listed below)... \n r = rock; \n p = paper; \n s = scissors ');

/*==========================================================================
=====  once 'anykey' is released, it fires up this event/function      =====
============================================================================*/
gameScreen.addEventListener('keyup',function(e) {
    /* local-scoped variables, available in this function only... */
    const gameArray = ['rock', 'paper', 'scissors'];
    let computersChoice = Math.floor((Math.random() * 3));
    computersChoice = gameArray[ computersChoice ];/* assign compsChoices 0-2 to gameArray[]... */
    let userChoice;

    /*=====================================================================
    ==== checks for r,p,s keys & assigns string values to userChoice   ====
    =======================================================================*/
    if (e.key === 'r') {
        userChoice = 'rock';
    }
    else if (e.key === 'p') {
        userChoice = 'paper';
    }
    else if (e.key === 's') {
        userChoice = 'scissors';
    } 
    else {
        /* if user types in any other key than above listed keys, function stops here till 'r, p, s' are pressed... */
        console.log('Invalid key: \n only \" r, p or s \" are valid to play');
        return false;
    }
    console.log(`Your choice is: ${ userChoice }`);/* template literal that embeddes 'userChoice' value into string via the console... */
    console.log(`The computer chose: ${ computersChoice }`);/* template literal that embeddes 'computersChoice' value into string via the console... */

    /*==========================================================================================================
    === playGame() compares parameter values of user & computer, increments value based on found condition   ===
    ============================================================================================================*/
    function playGame(user, comp) {
        if ((user === 'rock') && (comp === 'scissors') || (user === 'paper') && (comp === 'rock') || (user === 'scissors') && (comp === 'paper')) {
            wins++;
            console.log('Kudos, you won!');
        } 
        else if (user === comp) {
            ties++;
            console.log('You both think alike and have tied');
        } 
        else {
            losses++;
            console.log('Sorry, you\'ve lost');
        }
    }

    /*===========================================================================================================
    ===     calls the function playGame() to start, accepts two parameters(your-choice/computer-choice)       ===  
    ============================================================================================================= */
    playGame(userChoice, computersChoice);

    console.log(`\nYour current score is: \n ${ wins } wins, \n ${ losses } losses, and \n ${ ties } ties \n `);/* updates variables at top, template-literal shows value in string via console.log()... */ 
    console.log('Please choose either of the \"r, p or s\" key\'s to play again \n ');/* lets you know you can play again... */
})