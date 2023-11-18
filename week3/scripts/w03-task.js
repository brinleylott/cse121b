/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Define the add function
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
// subtract1, subtract2, subtractNumbers, and difference.
function subtract(subtract1, subtract2){
  return subtract1 - subtract2
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
// Arrow function for multiplication
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for handling multiplication of numbers
const multiplyNumbers = () => {
    // Get the values from the input fields when the button is clicked
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Perform the multiplication and set the result in the #product input field
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Attach the multiplyNumbers arrow function to the click event of the button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Function declaration for division
function divide(dividend, divisor) {
  return dividend / divisor;
}

// Function expression for handling division of numbers
const divideNumbers = function () {
  // Get the values from the input fields when the button is clicked
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);

  // Perform the division and set the result in the #quotient input field
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Arrow function for handling division of numbers
const divideNumbersArrow = () => {
  // Get the values from the input fields when the button is clicked
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);

  // Perform the division and set the result in the #quotient input field
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Attach the divideNumbers function to the click event of the button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
// Alternatively, you can use the arrow function version:
// document.querySelector('#divideNumbers').addEventListener('click', divideNumbersArrow);


/* Decision Structure */
// Declare and instantiate an array variable with numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assign the value of the array variable to the HTML element with an ID of 'array'
document.getElementById('array').textContent = numbersArray.join(', ');

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of 'odds'
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ');

// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of 'evens'
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array by 2 and assign the result to the HTML element with an ID of 'multiplied'
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
