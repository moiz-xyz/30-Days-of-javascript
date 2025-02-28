//  Higher order function in JavaScript 
// In JavaScript, higher-order functions are functions that do at least one of the following:

// Take another function as an argument (callback function)
// Return a function
// These functions are powerful because they enable functional programming concepts like abstraction, code reuse, and cleaner, more readable code.

// 1. Passing Functions as Arguments (Callbacks)
// A function can accept another function as an argument and call it within.

function greet (name){
    console.log(`Hello ${name}`);
    
}
function processUser (callback){
    const userName = "Moiz";
    callback(userName) // Calling the function passed as an argumnet
}

processUser(greet) // output Hello Moiz
// Here, processUser is a higher-order function because it takes greet as an argument and calls it inside.

// 2. Returning Functions
// A higher-order function can also return another function.

function multiplyBy (factor){
    return function (num){
         return num  * factor
    }
}
const double = multiplyBy(2);
const triple = multiplyBy(3);


console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
// Here, multiplyBy returns a function that multiplies a number by a given factor.

// 3. Common Built-in Higher-Order Functions in JavaScript
// JavaScript provides several built-in higher-order functions like:

// map()
// Transforms an array by applying a function to each element.
const numbers = [1,2,3,4,5]
const sq = numbers.map (num => num * num);
console.log(sq); // Output: [1, 4, 9, 16, 25]

// filter()
// Filters an array based on a condition.
const age = [ 15 ,10, 25, 30 ,40 ] ;
const adults = age.filter (age => age >= 18);
console.log(adults);  // Output: [25, 30, 18]

// reduce()
// Reduces an array to a single value.

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15

// Why Use Higher-Order Functions?
// ✔️ Code Reusability – Functions can be reused and customized easily.
// ✔️ More Readable & Maintainable Code – Makes the code cleaner and easier to understand.
// ✔️ Encapsulation – Helps abstract away implementation details.