//  📌 Parameter
// Parameters are placeholder used in functions to revive value when functons is called
// e.g 

function greet (){
    console.log("Hello Moiz");   
} 
greet()// in this function it will alasy return Hello Moiz 
// but what if we do like that 

function greet2( name ){
console.log(`Hello ${name}` );
}
greet2("Moiz")
greet2("Ali") // 👉 name is a parameter. It receives a value (like "Moiz" or "Ali")
//  when the function is called.

// Mulitple Parmeters
let argument1 = "Web";
let argument2 = "Development";
function example (parameter1, parameter2) { // theser are paremetes 
    console.log(parameter1);
    console.log(parameter2);
}
example (argument1,argument2); // passing two argumnets  // ans is Web Development

// Default Parmeters 
function greet3 (name = "Guest"){
    console.log(`Hello ${name}`);
}

greet3("Moiz"); // Hello Moiz
greet3();  // by defualt if no name is given ans is Hello guest

// Summary
// ✅ Parameters let functions receive dynamic values
// ✅ Use multiple parameters for multiple values
// ✅ Set default values for optional parameters
// Want a small practice task? Try this: 
// 🔹 Write a function subtract that takes two numbers and returns the result of subtracting them. 🚀



// 📌 Return value
// A return value is a resut that functions send back after exection .Thsi allow use to shore reulst and use it later 

function sayHello (){
    console.log("Hello");
}
sayHello()
// ✅ This function prints a message but does not return anything.
// ❌ We cannot store or use the result later.

function multiple (){
    return a  * b
}
let result = multiple(3*8)
console.log(result);
// ✅ Here, add(3,8) returns 24, which we store in result and print.
// ✅ Now we can use result in further calculations.
result *42 ;

// 2️⃣  Difference Between return and console.log
function multiply(x, y) {
    console.log(x * y);
}

let output = multiply(4, 2);
console.log(output); // Output: 8 and undefined
// ❌ Problem: multiply(4, 2) prints 8 but returns nothing (undefined).
// 🔹 Fix Using return:

function multiply(x, y) {
    return(x * y);
}
let output2 = multiply(4, 2);
console.log(output)

// checking inside condition
function checkeven (number){
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(checkeven(3));
console.log(checkeven(10));
console.log(checkeven(823802808290));

// 🛠 Practice Task
// Create a function subtract(a, b) that returns the result of a - b. Try calling the function and printing the result! 🚀
