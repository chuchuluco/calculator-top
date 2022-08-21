let firstOperand = ''
let secondOperand = ''
let currentOperation = null

let resultDisplay = document.querySelector('p.result');
const buttons = document.getElementById('calc')
const numberButtons = buttons.querySelectorAll('.num')
const backspaceButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const dotButton = document.querySelector('.dot')
const equalButton = document.querySelector('.equal')
const operatorButtons = document.querySelectorAll('.operator')

operatorButtons.forEach((operator) => operator.addEventListener('click', () => setOperation(operator))
)


numberButtons.forEach((button) =>
  button.addEventListener('click', () => updateDisplay(button.textContent))
)

backspaceButton.addEventListener('click', backspace)
clearButton.addEventListener('click', clear)
dotButton.addEventListener('click', appendPoint)
equalButton.addEventListener('click', evaluate)


function add(a, b) { 
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  let num = Math.round((a * b) * 100) / 100
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

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = resultDisplay.textContent
  currentOperation = convertOperator(operator)
  resetScreen()
}

function evaluate() {
  if (currentOperation === null) return
  if (currentOperation === '÷' && resultDisplay.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = resultDisplay.textContent
  resultDisplay.textContent = operate(currentOperation, firstOperand, secondOperand)
  currentOperation = null
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      console.log(subtract(a, b))
    case 'x':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

function updateDisplay(number) {
  console.log(resultDisplay)
  if(resultDisplay.textContent === '0') 
    resetScreen()
  resultDisplay.textContent += number
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



function convertOperator(button) {
  if(button.className === 'add operator') {
    return '+'
  } if(button.className === 'divide operator') {
    return '÷'
  } if(button.className === 'multiply operator') {
    return 'x'
  } if(button.className === 'subtract operator') {
    return '-'
  }
}