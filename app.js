let firstOperand = ''
let secondOperand = ''
let currentOperation = null

let resultDisplay = document.querySelector('p.result');
const buttons = document.getElementById('calc')
const numberButtons = buttons.querySelectorAll('.num')
const backspaceButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')

console.log(numberButtons)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => updateDisplay(button.textContent))
)

backspaceButton.addEventListener('click', backspace)
clearButton.addEventListener('click', clear )

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
  resultDisplay.textContent = '0'
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function backspace() {
  resultDisplay.textContent = resultDisplay.textContent.toString().slice(0, -1)
}


function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function updateDisplay(number) {
  resultDisplay.textContent += number
  console.log(resultDisplay)
}

function resetScreen() {
  resultDisplay.textContent = ''
}

function appendPoint() {
  if (resultDisplay.textContent === '')
    resultDisplay.textContent = '0'
  if (resultDisplay.textContent.includes('.')) return
  resultDisplay.textContent += '.'
}



