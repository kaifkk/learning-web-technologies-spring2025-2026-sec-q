let cells = document.querySelectorAll(".cell");
let status = document.getElementById("status");
let resetBtn = document.getElementById("resetBtn");
let xScoreEl = document.getElementById("xScore");
let oScoreEl = document.getElementById("oScore");


let player = "X";
let gameOver = false;

let xScore = 0;
let oScore = 0;

let winComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if(cells[i].innerText !== "" || gameOver) {
            return;
        }
        
        cells[i].innerText = player;

        let winnerCombo = checkWin();
        if(winnerCombo){
            status.innerText = "Player " + player + " wins!";
            highlightWin(winnerCombo);
            gameOver = true;

            if(player === "X"){
                xScore++;
                xScoreEl.innerText = xScore;
            } else{
                oScore++;
                oScoreEl.innerText = oScore;
            }
            return;
        }

        if(checkDraw()) {
            status.innerText = "It's a draw!";
            gameOver = true;
            return;
        }

        if(player === "X") {
            player = "O";
        } else {
            player = "X";
        }

        status.innerText = "Player " + player + "'s turn";
    })
}

function checkWin() {
    for(let i = 0; i < winComb.length; i++) {
        let a = cells[winComb[i][0]].innerText;
        let b = cells[winComb[i][1]].innerText;
        let c = cells[winComb[i][2]].innerText;

        if(a !== "" && b !== "" && c !== "" && a === b && b === c) {
            return winComb[i];
        }
    }

    return null;
}

function checkDraw() {
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].innerText === "") {
            return false;
        }
    }
    return true;
}

function highlightWin(combo){
    for(let i = 0; i < combo.length; i++){
        cells[combo[i]].classList.add("win");
    }
}

resetBtn.addEventListener("click", function() {
    for(let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].classList.remove("win");
    }

    player = "X";
    gameOver = false;
    status.innerText = "Player X's turn";
})