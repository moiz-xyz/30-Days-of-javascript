// Scopes

// 1️⃣  Global Scopes

// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have Global Scope:
  let name = "Moiz"; // Global scopes can be access any where
  function  greet(){
console.log(`Hello`+ name);
  }
  greet ()

  console.log(name);

  //  2️⃣ Local Scope
  // Variables declared within a JavaScript function greet()2, are LOCAL to the function
  // Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
  // Local variables are created when a function starts, and deleted when the function is completed.
  function greet2 (){

      let name2 = "Guest" // local scope cannnot be access out of this function
      console.log("Hello " +name);
    }
    console.log(name2); // error undefined


// Closures
// In JavaScript, closure is a feature where an inner function has access to the variables of its
// outer function even after the outer function has executed.

// 1️⃣ Lexical scoping
// Consider the following example code:
function main (){
    let name = "Imaran Khan" // name is global varibale

    function displayName (){  // displayname() is the innner function

        console.log(name); // use variable declared in the parent function
    }

    displayName()
}
main();// Imaran Khan 

// main() creates a local variable called name and a function called displayName(). The displayName()
// function is an inner function that is defined inside main() and is available only within the 
// body of the main() function. Note that the displayName() function has no local variables of its own.
//  However, since inner functions have access to the variables of outer scopes, displayName() 
// can access the variable name declared in the parent function, main().

// 🔹 How Closure Works:
// A closure allows a function to "remember" the scope in which it was created. This means the 
// inner function can access:

// 1-Its own variables.
// 2-Variables from its outer function.
// 3-Global variables.

// counter 

function counter (){
    let start = 0;
    return ()=>{
        start ++
        console.log(start);
    }
}
let increment = counter ()
increment () // 1
increment () // 2
increment () // 3
increment () // 4

// stat remains private inside the counter function and can only be modified using the returned function.


// 🔹 Summary of Closures in JavaScript 🔹
// A closure is a function that remembers the variables from its outer scope even after the
// outer function has finished executing.

// 🔹 Key Points:
// ✅ Lexical Scope: Inner functions can access outer function variables.
// ✅ Preserved Scope: The inner function "remembers" its surrounding scope.
// ✅ Data Privacy: Useful for creating private variables.
// ✅ Common Use Cases:

// Encapsulation (hiding variables)
// Maintaining state (e.g., counters)
// Event listeners and callbacks
