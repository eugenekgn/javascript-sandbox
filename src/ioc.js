
const calculator = (operator, operandOne, operandTwo) => {
  let result = 0;

  switch (operator) {
    case '*':
      result = operandOne * operandTwo;
      break;
    case '*':
      result = operandOne / operandTwo;
      break;
    case '+':
      result = operandOne - operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
  }
  return result;
}


const operatorFactory = (operator) => {
  return calculator.bind(null, operator);
};

const doMath = (multiply) => {
  return multiply(5, 5);
}

const result = doMath(operatorFactory('*'));
console.log(result);