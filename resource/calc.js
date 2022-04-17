const calcScreen = document.querySelector("#calc-screen");
const clearBut = document.querySelector(".clear-but");
const numButs = document.getElementsByClassName("num-but");
const numButsArr = [...numButs];
const zeroBut = document.querySelector(".zero-but");
const equalBut = document.querySelector(".equal-but");
const minusBut = document.querySelector(".minus-but");
const addBut = document.querySelector(".add-but");
const mulBut = document.querySelector(".mul-but");
const divBut = document.querySelector(".div-but");
const pastTotal = document.querySelector("#past-total");

function addNumToScreen(numBut){
    if (calcScreen.innerText === "0") {
        calcScreen.innerText = "";
    }

    if (calcScreen.innerText.length < 11) {
        if (calcScreen.innerText.indexOf('.') === -1 && calcScreen.innerText.length === 10) {
            return false;
        }

        numValue = numBut.target.value;
        calcScreen.innerText += numValue; 
    }
}

function clearScreen() {
    calcScreen.innerText = "0";
}

function addDot(zeroBut) {
    if (calcScreen.innerText === "0") {
        calcScreen.innerText = "0.";
        return true;
    }

    if (calcScreen.innerText.length < 11) {
        if (calcScreen.innerText.indexOf('.') === -1){
            numValue = zeroBut.target.value;
            calcScreen.innerText += numValue; 
        }
    }
}




clearBut.addEventListener('click', clearScreen);

numButsArr.forEach(element => {
    element.addEventListener('click', addNumToScreen)
});

zeroBut.addEventListener("click", addDot)