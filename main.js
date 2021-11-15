//////////////////////// Global Variables //////////////////////////////
const playerOne = {
    turn: null,
    score: null,
    name: "",
};

const playerTwo = {
    turn: null,
    score: null,
    name: "",
};

let turnTracker = 1;



// DOM
let inputName = document.querySelector(".pNameInput"); // name input box
let submitNameBtn = document.querySelector(".submitName"); 
let turnMessage = document.querySelector(".turnMsg");
let resetBtn = document.querySelector(".resetButton");
let gameBoard = document.querySelector(".board");
let gameCells = document.querySelectorAll(".gamebox");
let winMsg = document.querySelector(".winMsg");


// Individual game cells
let TL = document.getElementById("TL");
let TM = document.getElementById("TM");
let TR = document.getElementById("TR");
let ML = document.getElementById("ML");
let MM = document.getElementById("MM");
let MR = document.getElementById("MR");
let BL = document.getElementById("BL");
let BM = document.getElementById("BM");
let BR = document.getElementById("BR");



//////////////////////// Functions //////////////////////////////


// Execute game
function render () {
    activateCells();
    // Enable cells
    gameCells.forEach(function (item) {
        item.className += " hoverCells";
    })
    inputName.placeholder = "You're ready to play!"; // change placeholder message
    inputName.value = ""; // clear input field
    inputName.disabled = true; // disable input field
    submitNameBtn.style.pointerEvents = "none"; // disable submit button
    submitNameBtn.disabled = true; // Hide submit button

};

// handle user input 
function handleClick (e) {
    // Player 1's turn
    if (turnTracker % 2 === 1) {
        // If cell has not already been clicked
        if (e.target.innerHTML === "") {
            e.target.innerHTML = "X"; // place x on clicked cell
            turnTracker++; // next player's turn
            console.log(turnTracker);
            turnMessage.innerHTML = `${playerTwo.name}'s turn: O` // display message for Player 2's turn
            winner(); // checks win condition 
        }
    }
    // Player 2's turn 
    else {
        if (e.target.innerHTML === "") {
            e.target.innerHTML = "O"; // place O on clicked cell
            turnTracker++; // next player's turn
            turnMessage.innerHTML = `${playerOne.name}'s turn: X` // display message for Player 1's turn
            winner(); // checks win condition
        }
    }
};

function winner () {
    // TL TM TR
    if (TL.innerHTML === TM.innerHTML && TM.innerHTML === TR.innerHTML && TR.innerHTML !== "") {
        if (TR.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // ML MM MR
    else if (ML.innerHTML === MM.innerHTML && MM.innerHTML === MR.innerHTML && MR.innerHTML !== "") {
        if (MR.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // BL BM BR
    else if (BL.innerHTML === BM.innerHTML && BM.innerHTML === BR.innerHTML && BR.innerHTML !== "") {
        if (BR.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // TL ML BL
    else if (TL.innerHTML === ML.innerHTML && ML.innerHTML === BL.innerHTML && BL.innerHTML !== "") {
        if (BL.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // TM MM BM
    else if (TM.innerHTML === MM.innerHTML && MM.innerHTML === BM.innerHTML && BM.innerHTML !== "") {
        if (BM.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // TR MR BR
    else if (TR.innerHTML === MR.innerHTML && MR.innerHTML === BR.innerHTML && BR.innerHTML !== "") {
        if (BR.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // TR MM BL
    else if (TR.innerHTML === MM.innerHTML && MM.innerHTML === BL.innerHTML && BL.innerHTML !== "") {
        if (BL.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    }
    // TL MM BR
    else if (TL.innerHTML === MM.innerHTML && MM.innerHTML === BR.innerHTML && BR.innerHTML !== "") {
        if (BR.innerHTML === "X") {
            winMsg.innerHTML = `${playerOne.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
        else {
            winMsg.innerHTML = `${playerTwo.name} wins! <br>Click reset to play again.`;
            toggleWin();
        }
    } 
    else if (turnTracker === 10) {
        toggleTied();
    }
}



// Reset
function reset (e) {
    turnMessage.innerHTML = `${playerOne.name}'s turn: X`; // reset who's turn message
    turnTracker = 1; // reset player's turn
    gameCells.forEach( function(e) { // reset each cell 
        e.innerHTML = null;
        e.style.pointerEvents = "auto"; // allows clicking on cell again 
    });
    winMsg.style.display = "none"; // hides winner message
};

// Toggle win message
function toggleWin () {
    winMsg.style.display = "block"; // show message
    gameCells.forEach(function(e){ // disable clicking on cells
        e.style.pointerEvents = "none";
    });
};

// Toggle tied message
function toggleTied () {
    winMsg.innerHTML = "Tie game!" // tied game message
    winMsg.style.display = "block"; // show message
    gameCells.forEach(function(e){ // disable clicking on cells
        e.style.pointerEvents = "none";
    });
}

function subName (e){
    // if player One doesn't have a name, add name 
    if (playerOne.name === "" && inputName.value.length > 0) {
        playerOne.name = inputName.value; 
        turnMessage.innerText = `${playerOne.name}'s turn: X`;
        inputName.placeholder = "Enter player two's name"
        inputName.value = "";

    } // if player two doesn't have a name, add name
    else if (playerTwo.name === "" && inputName.value.length > 0) {
        playerTwo.name = inputName.value;
        render();
    }
};

//////////////////////// Event Listeners ////////////////////////

// Reset button
resetBtn.addEventListener('click', reset);



// Game cells
function activateCells () {
    gameCells.forEach(function (item) {
        item.addEventListener('click', handleClick);
    });
}



// Submit name button

submitNameBtn.addEventListener('click', subName);




