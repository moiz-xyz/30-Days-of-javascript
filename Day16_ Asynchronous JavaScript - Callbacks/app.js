// ====== D/B Asynchronous AND Synchronous

// Asynchronous are the actions that we intiate now and they finish later e.g set timeout 

console.log("Start"); // it will excute imediate
setTimeout (()=>{
 console.log("hey Iam doing great");
 
}, 3000)  // this will come after 3 sec bcs its an  Asynchronous

console.log("End"); // it will excute imediate


// Synchronous actions are that type of actions of that initate and finish one by one
let a = prompt ('What is your name');
let b = prompt ('What is your age');
console.log( a  + "is" +b + "years old"); // it wil eexcute line by line

// What is a Callback Function?
// A callback function is a function that is passed as an argument to another function and is executed later, usually after an asynchronous operation completes.
function greet (name , callback){
    console.log("Hello " + name);
    callback ()
 }

 function sayHello(){
    console.log("Hello");
 }
 greet ("Moiz" , sayHello);

 // Asynchronous JavaScript - Callbacks
 // In JavaScript, functions are executed synchronously by default, meaning one statement is executed at a time in order.
 // However, in asynchronous programming, JavaScript can perform tasks without blocking the main execution thread.
 // One way to handle asynchronous tasks is by using callbacks.
 function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Calling the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Calling greet and passing sayGoodbye as a callback
greet("Moiz", sayGoodbye);


//  🔹 Why Do We Need Callbacks?
// Callbacks are mainly used for asynchronous operations (tasks that take time to complete), like:

// Reading files
// Fetching data from a server
// Waiting for user input
// Timers (setTimeout, setInterval)
// If JavaScript waited for these tasks to finish before moving on, the program would be blocked and slow. Instead, JavaScript continues executing and runs the callback later.

// 🔹 Callbacks with Data Fetching (Simulating API Call)
// Imagine you are fetching data from a server (like getting a user's profile from a database). This takes time, so we use a callback.
function fetchdata (callback){
    console.log("Fetching Data.....");

    setTimeout( ()=>{
        const data = {
             name : "Moiz",
             age : 18
        }
        console.log("Data fetched");
        callback(data);
    }, 3000)
    
}
function processData (data){
    console.log("Processing", data);
    
}
fetchdata (processData)

// 🔸 What happens here?
// "Fetching data..." is printed.
// setTimeout() waits for 3 seconds, simulating a slow server.
// "Data fetched!" is printed.
// processData(user) is called with { name: "Moiz", age: 17 }.
// "Processing: { name: 'Moiz', age: 17 }" is printed.



// 🔹 Summary
// ✅ Callbacks are functions passed into another function to be executed later.
// ✅ They are useful for asynchronous tasks like fetching data, timers, and user input.
// ✅ Callback hell happens when we nest too many callbacks, making code messy.
// ✅ Promises and async/await are better ways to handle asynchronous code.