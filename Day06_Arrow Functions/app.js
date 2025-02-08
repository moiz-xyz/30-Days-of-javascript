// Arrow functions in JavaScript are a shorter way to write functions. 
// They were introduced in ES6 (ECMAScript 2015) and make code more concise and readable.
// 📌 Basic Syntax
// A regular function: 

function add (){
    console.log(3+5);
    
}
add() // ans is 8

// With an arrow function, the same function can be written as: 
const add = () => {
console.log(3+5);
}
add() // ans is 8

// 📌 Different Forms of Arrow Functions
// 1️⃣ No Parameters
// If a function has no parameters, use () before =>

    const greet = () => {
        console.log("Hello Arrow functions");
    }
    greet ()

//     2️⃣ Single Parameter
// If there is only one parameter, you can skip ()

const greet2 = (name) =>{   // (name) this parameter
console.log(`Hello  ${name}`);
}
greet2("Moiz")  // ("Moiz")  this is argument

// 3️⃣ Multiple Parameters
// For two or more parameters, use ()

square = (a , b) => console.log( a * b);
square (2,2) // ans is 4 

// 📌 this in Arrow Functions  (this is dynamic and depends on how the function is called)

// Arrow functions do not have their own this, they inherit this from their surrounding scope.

// 🔹 Regular function (Creates its own this)
const obj = {
    value: 10,
    regularFunction: function() {
        console.log(this.value); // Refers to obj
    }
};
obj.regularFunction(); // Output: 10

// ✅ Explanation:
// 1 - regularFunction is a normal function, so this refers to the object (obj) that calls it.
// 2- Since obj has a property value: 10, this.value returns 10.
// 3- this inside regularFunction belongs to obj because obj.regularFunction() is the calling context.

// 🔹 Arrow Function (this does NOT refer to the object but the surrounding scope)
const obj2 = {
    value: 10,
    arrowFunction: () => {
        console.log(this.value); // `this` refers to the outer scope, not obj2
    }
};
obj2.arrowFunction(); // Output: undefined


// 📌 When to Use Arrow Functions?
// ✅ For shorter syntax
// ✅ When you don’t need this
// ✅ For simple one-liner functions
// ❌ Avoid in object methods (this issue)
// ❌ Avoid in constructor functions

// ✨ Summary
// 🔹 Arrow functions are a modern and concise way to write functions
// 🔹 They don’t have their own this
// 🔹 Best for simple functions but not for object methods or constructors