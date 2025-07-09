
function calculate(a, b, operator) {
    return operator(a, b);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
} 

const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

let result = calculate.apply(null, [2, 3, operations["+"]]);
console.log(result)