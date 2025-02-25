// In JavaScript, try...catch...finally is used for error handling. It allows you to handle exceptions (errors) that occur in a block of code without crashing the entire program.

// Syntax
try {
    // Code that may cause an ero
} catch (error) {
    // code to handle the error
} finally {
    // code that will always run (optional)
}


// HOW IT WORKS 
// 1- try block -- Code inside this block is executed
// 2- Catch block -- If an error occurs in try, this block handles it.
// 3- finally block -- Always executes, whether there was an error or not ...

try {
    let num = 10;
    console.log(num.toUpperCase()); // this will cause an error\
    
} catch (error) {
    console.log("An error occured :" ,error.message);
} finally {
        console.log("This will always run");
}
// Output
// An error occurred: num.toUpperCase is not a function
// This will always run.

try {
    let num = 10;
    console.log(num); // no error
    
} catch (error) {
    console.log("An error occured :" ,error.message);
} finally {
        console.log("This will always run");
}
// Output
// 10
// This will always run.


// You can use throw to manually create an error:

try {
    let age = -5;
    if (age < 0){
        throw new Error ("Age cannot be negative")
    }
    console.log("Valid age", age);
}catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Execution completed.");
}

// Output
// Error: Age cannot be negative
// Execution completed.



// When to Use try...catch...finally?
// When working with user input (to prevent crashes).
// Handling network requests (API calls).
// Preventing crashes in large applications.
