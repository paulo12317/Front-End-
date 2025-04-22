let textValue = '';
let input = document.querySelector("#inputText");

function addNumber(number){
    textValue += number;
    updateText();
}

function addOperator(operador){
    textValue += operador;
    updateText();
}

function addDecimal(){
    textValue += '.';
    updateText();
}

function clearText(){
    textValue = "";
    updateText();
}

function updateText(){
    input.value = textValue;
}

function calculate(){
    textValue = eval(textValue);
    updateText();
}
