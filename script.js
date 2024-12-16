function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return Math.round(a/b)
}

let num1 = 0;
let num2 = 0;
let operator;

function operate(operator,num1,num2){
    if (operator == "+"){
        return add(num1,num2);
    }
    else if (operator == "-"){
        return subtract(num1,num2);
    }
    else if (operator == "x"){
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}