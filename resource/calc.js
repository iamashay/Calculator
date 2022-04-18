const calcScreen = document.querySelector("#calc-screen");
const clearBut = document.querySelector(".clear-but");
const numButs = document.getElementsByClassName("num-but");
const numButsArr = [...numButs];
const dotBut = document.querySelector(".dot-but");
const equalBut = document.querySelector(".equal-but");
const pastTotal = document.querySelector("#past-total");
const pastOperator = document.querySelector("#past-operator");
const calcOperators = document.getElementsByClassName('operator');
const calcOperatorsArr = [...calcOperators];
const deleteBut = document.querySelector(".delete-but");


function addNumToScreen(numBut){
    if (calcScreen.innerText === "0" || calcScreen.innerText === "TOO LONG") {
        calcScreen.innerText = "";
    }

    calcOperatorsArr.forEach((element) => {
        if (element.classList.contains('active-operator')){
            calcScreen.innerText = "";
        }
    })

    if (calcScreen.innerText.length < 11) {
        if (calcScreen.innerText.indexOf('.') === -1 && calcScreen.innerText.length === 10) {
            return false;
        }

        numValue = numBut.target.value;
        calcScreen.innerText += numValue; 
    }
    deactivateOperator();

}

function clearScreen() {
    calcScreen.innerText = "0";
    pastOperator.value = ''; 
    pastTotal.value = '';
    deactivateOperator();
}

function addDot() {
    if (calcScreen.innerText === "0") {
        calcScreen.innerText = "0.";
        return true;
    }

    if (calcScreen.innerText.length < 11) {
        if (calcScreen.innerText.indexOf('.') === -1){
            numValue = '.';
            calcScreen.innerText += numValue; 
        }
    }
}


function operatorClick(operatorBut) {
    doCalc();
    pastTotal.value = calcScreen.innerText;
    pastOperator.value = operatorBut.target.value;
    operatorBut.target.classList.add("active-operator");

}

function doCalc(){
    if (pastOperator.value && pastTotal.value != '') {
        switch(pastOperator.value) {
            case '/':
                if (parseInt(calcScreen.innerText) === 0){
                    clearScreen();
                    break;
                }
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

        if (calcScreen.innerText.length > 11){
            calcScreen.innerText = "TOO LONG";
            pastTotal.value = 0;
            pastOperator.value = '';
            deactivateOperator();
            return;
        }

        pastTotal.value = calcScreen.innerText;
        pastOperator.value = '';
        deactivateOperator()
    }

}

function deleteNum(){
    if (calcScreen.innerText.length > 0) {
        calcScreen.innerText = calcScreen.innerText.substr(0, calcScreen.innerText.length-1);
    }
    if (calcScreen.innerText.length === 0) {
        calcScreen.innerText = 0;
    }
}

function deactivateOperator() {
    calcOperatorsArr.forEach(element => {
        element.classList.remove("active-operator");
    });
}

clearBut.addEventListener('click', clearScreen);

numButsArr.forEach(element => {
    element.addEventListener('click', addNumToScreen);
});

calcOperatorsArr.forEach(element => {
    element.addEventListener('click', operatorClick);
});

dotBut.addEventListener("click", addDot);

equalBut.addEventListener('click', doCalc);
deleteBut.addEventListener('click', deleteNum);

document.body.addEventListener('keydown', (event)=>{
    if (!isNaN(parseInt(event.key))){
        document.querySelector('button[value="'+event.key+'"]').click();
    }else if (event.key === "Backspace")
    {
        deleteNum();
    }else if (event.key === ".")
    {
        addDot();
    }else if (['+', '-', '*', '/'].indexOf(event.key) > -1){
        document.querySelector('button[value="'+event.key+'"]').click();
    }else if (event.key === "Enter"){
        document.querySelector('.equal-but').click();
    }
    //console.log(event)
});