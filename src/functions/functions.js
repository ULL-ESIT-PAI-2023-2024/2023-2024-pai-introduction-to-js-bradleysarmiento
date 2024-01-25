/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Code examples demonstrating features of functions
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// FUNCTIONS AS VALUES
const functionValue = function(argument) {
  // do something
}

exampleFunction(functionValue);


// DECLARATION NOTATION
function declarationNotation(argument) {
  // do something
}


// WRONG NUMBER OF ARGUMENTS
function minus(a, b) {
  if (b === undefined) {
    return -a;
  }
  else {
    return a - b;
  }
}
console.log(minus(10));     // -> -10
console.log(minus(10, 5));  // -> 5


// OPTIONAL ARGUMENTS
function power(base, exponent = 2) {
  let result = 1;
  for (let counter = 0; counter < exponent; counter++) {
    result *= base;
  }
  return result;
}
console.log(power(4));    // -> 16
console.log(power(2, 6)); // -> 64


// OPTIONAL ARGUMENTS
function power(base = 2, exponent) {
  let result = 1;
  for (let counter = 0; counter < exponent; counter++) {
    result *= base;
  }
  return result;
}
console.log(power(undefined, 6));    // -> 64
console.log(power(2, 6));            // -> 64


// RETURN
function firstReturn() {
  // code
  return undefined;
}

function secondReturn() {
  // code
  return;
}

function thirdReturn() {
  // code
}


// NESTED SCOPE
const timesTable = function(multiplicand) {
  const printMultiplication = function(multiplier) {
    console.log(`${multiplicand} * ${multiplier} = ${multiplicand * multiplier}`);
    // -> 4 * 0 = 0
    // -> 4 * 1 = 4
    // -> ...
  }
  for (let counter = 0; counter < 10; counter++) {
    printMultiplication(counter);
  }
}
timesTable(4);


// CLOSURE
function storeValue(number) {
  return () => number;
}
let stored1 = storeValue(1);
let stored2 = storeValue(2);
console.log(stored1()); // -> 1
console.log(stored2()); // -> 2

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// -> 10


// ARROW FUNCTIONS
const arrowFunction = (argument) => {
  // code
}

const squareSimple = (number) => { return number * number; } 
const squareEvenSimpler = number => number * number; 

const sayHello = () => { console.log('Hi! :)'); }

const someFunction = () => anotherFunction();

