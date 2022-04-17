const calcScreen = document.querySelector("#calc-screen");
const clearBut = document.querySelector(".clear-but");
const numButs = document.getElementsByClassName("num-but");
const numButsArr = [...numButs];
const zeroBut = document.querySelector(".zero-but");
const equalBut = document.querySelector(".equal-but");
const pastTotal = document.querySelector("#past-total");
const pastOperator = document.querySelector("#past-operator");
const calcOperators = document.getElementsByClassName('operator');
const calcOperatorsArr = [...calcOperators];

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
    pastOperator.value = ''; 
    pastTotal.value = '';
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


function operatorClick(operatorBut) {
    if (pastOperator.value && pastTotal.value) {
        switch(pastOperator.value) {
            case '/':
                calcScreen.innerText =  parseInt(pastTotal.value) / parseInt(calcScreen.innerText )
                break;
            case '*':
                calcScreen.innerText =  parseInt(pastTotal.value) * parseInt(calcScreen.innerText )
                break;
            case '+':
                calcScreen.innerText =  parseInt(pastTotal.value) + parseInt(calcScreen.innerText )
                break;
            case '-':
                calcScreen.innerText =  parseInt(pastTotal.value) - parseInt(calcScreen.innerText )
                break;
          }
          pastTotal.value = calcScreen.innerText;
          pastOperator.value = '';
    }

    if 

    pastTotal.value = calcScreen.innerText;
    calcScreen.innerText = 0;
    pastOperator.value = operatorBut.target.value;
    operatorBut.target.classList.add("active-operator");

}

clearBut.addEventListener('click', clearScreen);

numButsArr.forEach(element => {
    element.addEventListener('click', addNumToScreen);
});

calcOperatorsArr.forEach(element => {
    element.addEventListener('click', operatorClick);
});

zeroBut.addEventListener("click", addDot);
