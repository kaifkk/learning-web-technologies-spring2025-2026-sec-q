let cells = document.querySelectorAll(".cell");
let status = document.getElementById("status");
let resetBtn = document.getElementById("resetBtn");

let player = "X";
let gameOver = false;

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
        if(cells[i].innerText !== "") {
            return;
        }
        
    })
}