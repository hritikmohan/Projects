console.log("Welcome to the Legacy Tic-Tac-Toe")

// let music = new Audio(music.mp3)
let turnX = new Audio("ting.mp3")
let turnO = new Audio("ding.mp3")
let gameOver = new Audio("gameover.mp3")

let isGameOver = false;

let turn = "X"

// Function to change turn
const changeTurn = () => {
    return turn === "X"?"0":"X";
}

// Function to check for win
const checkWin = () => {
    let boxText = document.getElementsByClassName("box-text");
    // since .getElementBy ClassName returns HTMLCollections(Array-like) where each item can be accessed using indexing, that's why each box here can be selected using index
    
    let wins = [
        [0, 1, 2, 0, 5, 0], // row 1
        [3, 4, 5, 0, 15, 0], // row 2
        [6, 7, 8, 0, 25, 0], // row 3
        [0, 3, 6, -5, 15, 90], // column 1
        [1, 4, 7, 0, 15, 90], // column 2
        [2, 5, 8, 3, 15, 90], // column 3
        [0, 4, 8, 0, 15, 45], // diagonal 1
        [2, 4, 6, 0, 15, 135] // diagonal 2
    ];

    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerHTML = boxText[e[0]].innerText + " WON"
            isGameOver = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px";

            // Display the winning line
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "15vw";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', (e) => {
        if(boxtext.innerText === '' && !isGameOver){
            boxtext.innerText = turn;
            if(turn === "X"){
                turnX.play();
            }
            else{
                turnO.play();
            }
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onClick event listener on Reset Button

reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0";

     // Reset the line
     document.querySelector(".line").style.width = "0";
})