/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Examples of operator usage and inherent errors
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// FAMILIAR OPERATORS
let randomBool = true;
console.log(randomBool ? 'It is True!' : 'It is... False');
// -> It's true


// STRING CONCATENATION
let firstWord = 'I';
let secondWord = 'like';
let sentece = '';
sentece = sentece + ' ' + firstWord + ' ' + secondWord;
sentece += ' turtles';
console.log(sentece);
// -> I like turtles


// OR OPERATOR
console.log(5 - 5 || 2);    
// -> 2
console.log(undefined || null || 0); 
// -> 0
console.log('hello' || 'goodbye');  
// -> 'hello'

let userName = '';
let lastName = '';
let nickName = 'SuperMan';
console.log(lastName || userName || nickName || 'Anonymous'); 
// -> SuperMan


// AND OPERATOR
console.log(5 - 5 && 2);    
// -> 0
console.log(undefined && null && 0); 
// -> undefined
console.log('hello' && 'goodbye');  
// -> 'goodbye'

userName = '';
lastName = '';
nickName = 'SuperMan';
console.log(nickName && 'Anonymous' && userName && lastName); 
// -> '' 


// STRING COMPARISON
console.log('Z' > 'A');                 // -> true
console.log('Lee' > 'Lea');             // -> true
console.log('Bee' > 'Be');              // -> true
console.log('Leonardo' < 'Leonardo ');  // -> true


// DIFFERENT TYPES
let cookieCount1 = 0;
let cookieCount2 = '0';
console.log(cookieCount1 == cookieCount2);  // -> true
console.log(Boolean(cookieCount1) == Boolean(cookieCount2));   // -> false


// REGULAR EQUALITY CHECK
console.log(0 == false);    // -> true
console.log('' == false);   // -> true


// STRICT EQUALITY
console.log(0 === false);    // -> false
console.log('' === false);   // -> false
console.log(5 === '5');      // -> false


// COMPARISON: NULL AND UNDEFINED
console.log(null === undefined);    // -> false
console.log(null == undefined);     // -> true

console.log(null > 0);  // -> false
console.log(null == 0); // -> false
console.log(null >= 0); // -> true





