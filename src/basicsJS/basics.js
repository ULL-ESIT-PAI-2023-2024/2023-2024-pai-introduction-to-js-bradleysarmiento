/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Code related to basic concepts of JavaScript
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// FOR IN
const numbers = [1, 2, 3, 4, 5];
let text = '';
for (let position in numbers) {
  text += numbers[position];
}
console.log(text);
// -> 12345


// FOR OF
numbers = [1, 2, 3, 4, 5];
text = '';
for (let position in numbers) {
  text += numbers[position];
}
console.log(text);
// -> 12345


// COMMENTS
// Coment
/*
  Multiline Comment
*/

// INDENTATION
function indentationExample() {
  // code here
  if (true) {
    while (false) {
      // code here
    }
    // code here
  }
}
// code here

function indentationExample() {
    // code here
    if (true) {
      while (false) {
        // code here
      }
      // code here
    }
}
// code here


// SEMICOLON
numbers = [1, 2, 3, 4, 5];
text = '';
for (let position in numbers) {
  text += numbers[position];
}
console.log(text);
// -> 12345

numbers = [1, 2, 3, 4, 5];
text = ''
for (let position in numbers) {
  text += numbers[position];
}
console.log(text)
// -> 12345