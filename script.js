// Initializes variables
let num1 = 0;
let num2 = 0;
let operator = "";

// Collects input variables and performs an operation
function operate(operator) {
    if (operator = "+") return add();
    else if (operator = "-") return subtract();
    else if (operator = "*") return multiply();
    else if (operator = "/") return divide();
    else return "ERROR"
}

// Performs addition
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Performs subtraction
function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

// Performs multiplication
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// Performs division
function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}