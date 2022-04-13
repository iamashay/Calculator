const calcScreen = document.querySelector("#calc-screen");
const clearBut = document.querySelector(".clear-but");
const numButs = document.getElementsByClassName("num-but");
const numButsArr = [...numButs];

function addNumToScreen(numBut){
    if (calcScreen.innerText === "0") {
        calcScreen.innerText = "";
    }

    if (calcScreen.innerText.length < 11) {
        numValue = numBut.target.value;
        calcScreen.innerText += numValue;
    }
}

function clearScreen() {
    calcScreen.innerText = "0";
}

clearBut.addEventListener('click', clearScreen);

numButsArr.forEach(element => {
    element.addEventListener('click', addNumToScreen)
});