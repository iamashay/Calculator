const calcScreen = document.querySelector("#calc-screen");
const clearBut = document.querySelector(".clear-but");
const numButs = document.getElementsByClassName("num-but");

function addNumToScreen(value){
    calcScreen.innerText += value;
}

function clearBut() {
    calcScreen.innerText = "";
}