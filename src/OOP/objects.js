/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Code Examples Demonstrating Object Features in JavaScript
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// MUTABILITY
let number1 = 12;
let number2 = 12;
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(number1 == number2);  // -> true
console.log(object1 == object2);  // -> true
console.log(object1 == object3);  // -> false

object1.value = 15;
console.log(object2.value);       // → 15
console.log(object3.value);       // → 10


// DEFINITION
let car = new Object(); // "Object constructor"
let airplane = {};      // "Object literal"


// CONST OBJECTS
const car2 = {
  model: 'Tesla S'
};
  
car.model = 'Tesla X';  // We can modify properties?
  
car = {                 // This is not allow
  model: 'Tesla 3'
};


// PROPERTIES
let car = {
  model: 'Tesla S',
  releaseYear: 2012
};

Object.assign(car, {releaseYear: 1990, color: 'blue'});
console.log(car);
// -> { model: 'Tesla S', releaseYear: 1990, color: 'blue' }

car.releaseYear = undefined;
console.log(Object.keys(car)); 
// -> [ 'model', 'releaseYear' ]

delete car.releaseYear;
console.log(Object.keys(car)); 
// -> [ 'model' ]