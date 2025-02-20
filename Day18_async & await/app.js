// async and await in JavaScript (For Beginners)
// async and await are used in javascript to handle asynchronous operation more easily and in a readable way 

// 1 What is asynchronous programing ?
// In JavaScript, some operations take time, like:

// Fetching data from a server (API calls)
// Reading files
// Running timers (e.g., setTimeout)

// These tasks don’t stop the rest of the program from running. Instead of waiting for them, JavaScript moves on to the next line of code.

// 2. What is async?
// The async keyword is used before a function to make it return a promise. It means the function will always return a promise, even if you return a normal value.

async function greet() {
    return "Hello"
}
console.log(greet ()); // Promise { 'Hello' }

// Since greet() is an async function, it returns a promise instead of a direct string.
// We can use .then() to get the value:
greet().then(message => console.log(message)); // Output: Hello, Moiz!

// 3. What is await?
// The await keyword is used inside an async function to wait for a promise to resolve. It makes the code look like it runs synchronously.

async function fetchData() {
    let promise = new Promise ( (resolve) => {
        setTimeout(() => resolve("Data loaded!"), 2000);
    })
    console.log("Fetching ....");
    let result = await promise;
    console.log(result);
} 
// output 
// Fetching...
// (Data appears after 2 seconds)
// Data loaded!


// Without await, JavaScript would have moved on without waiting for promise to complete.

// 4. Why Use async/await Instead of .then()?
// Makes the code look cleaner and easier to read.
// Avoids callback hell.
// Easier to handle errors using try...catch.

async function getNumber() {
    try {
        let promise = new Promise ( (resolve, reject) =>{
            setTimeout(() => reject("Error: Something went wrong!"), 2000);
        });

        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
getNumber() // Error: Something went wrong!


// 5. Using async/await with Fetch API
// Fetching data from an API using async/await:
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log(users);
  }
  
  getUsers();
  
//   Summary
// async makes a function return a promise.
// await pauses the execution inside an async function until the promise is resolved.
// async/await makes code easier to read than .then().
// Use try...catch to handle errors properly.