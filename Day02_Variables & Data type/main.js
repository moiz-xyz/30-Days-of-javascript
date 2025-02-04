// What is a Variable?

// A variable is a container used to store data. In JavaScript, you can create a variable using 
// var, let, or const.
var first_var = "Hello JS";
console.log(first_var);

let number = 123 ;
console.log(number);

let isNumber = true;
let ifString = false;

const age  = 19 ;

// var: Can be re-declared and updated (not recommended).
// let: Can be updated but not re-declared in the same scope.
// const: Cannot be updated or re-declared. 


// Data Types
// 1. Primitive Data Types (Basic values)
//  We have 8 primmityove data types in js 
// These hold only a single value.
// Data Type	Example
// String (Text)	"Hello World"
// Number (Integers & Decimals)	   (25, 3.14, -7)
// Boolean (True/False)	
// // Undefined (No value assigned)	let x; (x is undefined)
// Null (Empty value)	let y = null;
// Symbol (Unique identifiers)	Symbol('id')
// BigInt (Very large numbers)	BigInt(9999999999999999)


let myName = "Moiz";   // String
let age2 = 18;          // Number
let isStudent = true;  // Boolean
let value;             // Undefined
let emptyValue = null; // Null



// 2. Non-Primitive (Reference) Data Types
// These can hold multiple values.

// Data Type	Example
// Object (Key-Value Pairs)	{name: "Moiz", age: 18}
// Array (Lists)	["Apple", "Mango", "Banana"]
// Function (Reusable code block)	function greet() { return "Hello"; }

let student = { name: "Moiz", age: 18 };  // Object
let fruits = ["Apple", "Mango", "Banana"]; // Array
function greet() { return "Hello!"; }     // Function
console.log(typeof "Hello");   // Output: string
console.log(typeof 10);        // Output: number
console.log(typeof true);      // Output: boolean
console.log(typeof null);      // Output: object (JavaScript bug)
console.log(typeof undefined); // Output: undefined
console.log(typeof {});        // Output: object
console.log(typeof []);        // Output: object
console.log(typeof function(){}); // Output: function
