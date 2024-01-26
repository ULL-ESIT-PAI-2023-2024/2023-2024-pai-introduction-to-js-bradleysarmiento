/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Code Examples Demonstrating Modern JavaScript Features
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// FEATURES
let cake = {
  flavor: 'chocolate', 
  color: 'brown'
}
let cakeWithIcing = {
  ...cake,
  icing: 'buttercream'
}
console.log(cakeWithIcing);
/* {
  flavor: 'chocolate',
  color: 'brown',
  icing: 'buttercream'
} */


// MODERN SHORTHAND
let createCoordinates = (coordinateX, coordinateY) => {
  return {
    coordinateX,
    coordinateY
  }
}

createCoordinates = (coordinateX, coordinateY) => {
  return {
    coordinateX:coordinateX,
    coordinateY:coordinateY
  }
}


// MODERN JS METHOD PROPERTIES
let math = {
  add: function(firstValue, secondValue) { return firstValue + secondValue; },
  sub: function(firstValue, secondValue) { return firstValue - secondValue; },
  multiply: function(firstValue, secondValue) { return firstValue * secondValue; }
}

math = {
  add(firstValue, secondValue) { return firstValue + secondValue; },
  sub(firstValue, secondValue) { return firstValue - secondValue; },
  multiply(firstValue, secondValue) { return firstValue * secondValue; }
}


// MODERN JS ARRAY METHODS
let array = [{id: 1, checked: true}, {id:2}];
console.log(array.find(item => item.id == 2));
// -> {id: 2}
console.log(array.findIndex(item => item.id == 2));
// -> 1
console.log(array.some(item => item.checked));
// -> true

let numberArray = [1, 2, 3, 4];
console.log(numberArray.includes(2));
// -> true


// FLAT
console.log([1, 2, 3, [4, 5]].flat());
// -> [ 1, 2, 3, 4, 5 ]
console.log([1, 2, 3, [4, 5, [6, 7]]].flat());
// -> [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log([1, 2, 3, [4, 5, [6, 7]]].flat(2));
// -> [ 1, 2, 3, 4, 5, 6, 7 ]


// MODERN JS ARRAY/STRING - at()
let words = ['I', 'like', 'turtles'];
console.log(words[words.length - 1]);
// -> turtles

console.log(['I', 'like', 'turtles'].at(-1));
// -> turtles