// variable declarations
let x; // let is for variables that can change
const a; // const is for variables that have a constant value
var y; // var is for variable that can change (old version of let)
// just use let or const

// naming conventions
// variables should be named consistently, the most popular one is camel case
// variables in javascript can't have spaces so in variables that have multible words,
// the first letter of the words after the first word is capatilized
let x;
let appleSauce;
let applePieIceCream;
// classes like Number and String have the first letter of each word capitalized
// we'll talk more about classes later

// types of variables

// this is a Number
let x = 2;

// this is a boolean value (true/false)
let boolean = true;

// this is a String, can be defined using: "" '' ``
let txt = "tree";

// arrays are number indexed lists of variables
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let array = [0, 2, 4, 8];

array.length // is 4

// the [] square brackets (aka sub) are used to access variables in the list
array[1] // is 2

// items can be edited using [] too
array[1] = 50; // makes the list [0, 50, 4, 8]

// items can be added to the end of the array like this, using the push method
array.push(16);

array.includes(4); // is true

array.pop(); // removes the last element in the array

array.shift(); // removes the first element in the array


// objects are like arrays but have properties, aka key/value pairs
let object = {
	a: 'apple',
	b: 'bear'
};
// they can be accessed using the dot syntax or with the [] square brackets
object.a // reference to 'apple'
object['a'] // same thing

// things can be added this way too
object.c = 'car';
object['c'] = 'car';

// functions can also be defined as variables:
// using the function keyword
function doAction0() {

}
// using the arrow function syntax
let doAction1 = () => {

};

// function can return a variable
function doAction2() {
	return 5;
}

// funcitons with input parameters x and y
// returned is the value of them multiplied
function doAction2(x, y) {
	return x * y;
}

// boolean evaluations

// in javascript numbers and strings can be truthy or falsy
// when evaluated as a boolean expression

let x = 'hello'; // single = for setting variable
let saysHello = (x == 'hello'); // double == for checking equivalence
// saysHello = true;

if (x != '') { // explicit check to see if string is not empty

}
// or have js evaluate the "truthiness" of a variable if it's not a boolean
if (x) { // implicit check to see if string is not empty

}

let x = true; // true
let y = false; // false
let z = null; // false

// any number besides 0 is true, 0 is false
let x = 109; // true
let x1 = -20; // true
let y = 0; // false if number is 0

// any string with characters in it is true, any empty string is false
let x = 'hello'; // true
let y = ''; // false

// boolean operators

!x; // NOT (aka negation), is true if x false

x || y; // OR true if x or y is true, checking x first, then y if x is false
// truth table
x y
0 0 = 0
1 0 = 1
0 1 = 1
1 1 = 1

	!(x || y); // NOR true if both x and y are false
// truth table
x y
0 0 = 1
1 0 = 0
0 1 = 0
1 1 = 0

x && y; // AND true if x and y are true, checking both
// truth table
x y
0 0 = 0
1 0 = 0
0 1 = 0
1 1 = 1

	!(x && y); // NAND true if any are false
// truth table
x y
0 0 = 1
1 0 = 1
0 1 = 1
1 1 = 0

// compound boolean expressions

(x || y) && z; // true if x or z is true and y is true
// truth table
x y z
0 0 0 = 0
1 0 0 = 0
0 1 0 = 0
0 0 1 = 0
1 1 0 = 0
1 0 1 = 1
0 1 1 = 1
1 1 1 = 1

// Global Objects

// window and console are special variables called global objects
// that are already initialized, they're part of the javascript programming
// language

// window in the browser can do things like show alerts to the user
window.alert('red alert!');
// console has methods for logging messages to a console output
console.log('dev mode');

// you can learn more about javascript by reading documentation found on MDN
// the Mozilla Developer Network

// the String class has a lot of useful methods, link to the documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// split(), splits a string by a pattern creating an array of strings
'the red fox'.split(' ')[1] // is 'red'

// other useful methods
str.slice(3, 6) // cuts a string by index values
str.charAt(4) // gets a character at a position in the string
str.indexOf('red') // returns the index of a substring if found in the string

// Number() can be used to convert strings to a Number

Number('2.67') // returns 2.67

// the Math class has many useful methods too:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.random() // returns a value
Math.abs(x) // returns the absolute value of x
Math.round(x) // returns x rounded to nearest integer (whole number)
Math.max(x, y) // returns the number (x or y) with the greatest value (max)
Math.min(x, y) // returns the number (x or y) with the lowest value (min)
