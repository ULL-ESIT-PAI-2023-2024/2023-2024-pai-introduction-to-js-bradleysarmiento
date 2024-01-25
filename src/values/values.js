/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Thomas Edward Bradley
 * @author Daniel David Sarmiento Barrera
 * @since Jan 29 2024
 * @desc Concepts relating to values and bindings in JS
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-introduction-to-js-bradleysarmiento.git}
 */

'use strict';

// VALUES EXAMPLE
'Hello World!'
1
true
null


// BINDINGS
let exampleString = 'Hello World!';
let exampleNumber = 1;
let exampleBool = true;
let emptyValue = null;


// USING VAR AND CONST
var exampleVar = 'Hello World!';
const CONST_VAR = 'Hello World!';


// VAR SCOPE EXAMPLE
var example = 'I\'m global variable!';
function test() {
  var example = 'I\'m function variable!';
  {
    var example = 'I\'m block variable!';
  }
  console.log('Inside Function - ' + example);
  // -> Inside Function - I'm block variable!
}
test();
console.log('Outside Function - ' + example);
// -> Outside Function - I'm global variable!


// GOOGLE STYLE GUIDE - BINDING NAMES
let example = 'Hello World!';
var exampleVar = 'Hello World!';
const CONST_EXAMPLE = 'Hello World!';


// WRAPPED OBJECTS
let welcomeMessage = "Hello, world!";
let messageLength = welcomeMessage.length;  // Access length 
console.log(messageLength);                 // Print length
// -> 13

let greeting = "Hello, world!";
let wrappedObject = new String(greeting);   // Create wrapped object
let greetingLength = wrappedObject.length;  // Access length
console.log(greetingLength);                // Print length
// -> 13


// TYPEOF
console.log(typeof undefined);    // -> undefined
console.log(typeof null);         // -> object
console.log(typeof false);        // -> boolean
console.log(typeof 5);            // -> number
console.log(typeof 5n);           // -> bigint
console.log(typeof 'foo');        // -> string
console.log(typeof console.log);  // -> function


// NUMBER - STORES ALL NUMBERS
let integerValue = 1234;
console.log(typeof(integerValue));
// -> number
let floatValue = 12.34;
console.log(typeof(floatValue));
// -> number


// NUMBER - SCIENTIFIC NOTATION
let scientificNotation = 2e5; // 2 * 10^5
console.log(scientificNotation);
// -> 200000


// NUMBER - NAN
console.log('Hello World!' / 2);    // -> NaN
console.log(Math.sqrt(-1));         // -> NaN
console.log(Number('Impossible'));  // -> NaN
console.log(NaN * 10);              // -> NaN
console.log(NaN / 10 + (5 * 10));   // -> NaN
console.log(NaN + 'Hello');         // -> NaNHello


// NUMBER - INFINITY
console.log(10 / 0);                // -> Infinity
console.log(-10 / 0);               // -> -Infinity
console.log(Number.MAX_VALUE * 2);  // -> Infinity
console.log(Infinity + 1);          // -> Infinity
console.log(Infinity - 1);          // -> Infinity
console.log(Infinity * Infinity);   // -> Infinity


// BIGINT
let smallNumber = 123;
let bigNumber = 1234567890123456789012345678901234567890n;
let result = bigNumber * BigInt(smallNumber);
console.log(result);  // -> 151851850485185185048518518504851851850470n


// STRING - BACKSLASH
console.log('\'Quote\'');
// -> 'Quote'


// STRING - BACKTICKS
let name = 'Juan';
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // -> Hello, my name is Juan and I am 25 years old.


// SYMBOL
let symbolExample = Symbol('mySymbol', {global: true}, {constant: false});
console.log(symbolExample);
// -> Symbol(mySymbol)


// NULL / UNDEFINED
let notDefined;
let exampleOfNull = null;
console.log(notDefined);    // -> undefined
console.log(exampleOfNull); // -> null


// NULL / UNDEFINED - FINDING VALUE DIFFERENT TO NULL
console.log(null == undefined);
// -> true
console.log(null == 0);
// -> false


// TYPE CONVERSION - BASIC CONVERSIONS
let userAge = '25';
let userAgeNumber = Number(userAge);
console.log(userAgeNumber);   // -> 25
let userAges = [25, 26, 27];
let userAgesString = String(userAges);
console.log(userAgesString);  // -> 25,26,27


// TYPE CONVERSION - FALSE VALUES
console.log(Boolean(0));          // -> false
console.log(Boolean(undefined));  // -> false
console.log(Boolean(null));       // -> false
console.log(Boolean(NaN));        // -> false
console.log(Boolean(""));         // -> false
console.log(Boolean(''));         // -> false
console.log(Boolean(``));         // -> false


// TYPE CONVERSION - NUMBER CONVERSIONS
console.log(Number(undefined)); // -> NaN
console.log(Number(null));      // -> 0
console.log(Number(true));      // -> 1
console.log(Number('1990w'));   // -> NaN