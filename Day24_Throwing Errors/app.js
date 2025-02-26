//  In JS throwing error means intentionlly stops the code execution and signalling that something went wrong 
// This is done through throw statements which creates an exception


// Basic Synntax 
throw new Error ("Something went wrong") ;
// The throw keyword is used to raise an error.
// new Error("message") creates an error object with a messa

function divide (a,b){
    if ( b === 0){
        throw new Error ("Cannot divide by 0 ") ;
    }
    return a / b ;
}
console.log( divide (12,3)); // 4
console.log( divide (12/0)); // Cannot divide by 0
// If b is 0, an error is thrown and stops execution

// Handling Errors with try...catch
// When an error is thrown, it can be caught using try...catch to prevent the program from crashing.
try {
    console.log( divide (10,0));
} catch (error) {
    console.log("Error occurred:", error.message);
} // Error occurred: Cannot divide by zero
// The catch block handles the error instead of stopping the entire program.


// Throwing Different Error Types
// You can throw different types of errors, like:

// ReferenceError (undefined variable)
// TypeError (wrong data type)
// Custom Errors (using Error class)


function getUserName(user) {
    if (!user) {
        throw new ReferenceError("User is undefined");
    }
    if (typeof user !== "object") {
        throw new TypeError("Expected an object");
    }
    return user.name;
}

try {
    console.log(getUserName(null)); 
} catch (error) {
    console.log(error.name + ": " + error.message);
} // ReferenceError: User is undefined


// When to Use throw?
// To stop execution when an unexpected condition occurs.
// To enforce rules in your code (e.g., prevent division by zero).
// To provide meaningful error messages for debugging.
