function add(a, b) { 
  return a + b;
};

function subtract(a, b) {
  return a - b;
} ;

function multiply(a, b) {
  let num = Number((a * b).toFixed(3))
  return num
};

function divide(a, b) {
  let num = Math.round((a / b) * 100) / 100
  return num
};

function clear() {
}

function backspace() {
}

function appendNumber(number) {
}

function chooseOperation(operation) {
}

function compute() {
}

function updateDisplay() {
}







let resultNumbers = null;
let result = document.querySelector('div.result');
const buttons = document.getElementById('calc')
const numbers = buttons.querySelectorAll('.num')

