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
  if (b === 0) {
    return 'Division by zero';
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operation';
  }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '-')); // Output: 2
console.log(calculate(5, 3, '*')); // Output: 15
console.log(calculate(5, 3, '/')); // Output: 1.6666666666666667
console.log(calculate(5, 0, '/')); // Output: Division by zero