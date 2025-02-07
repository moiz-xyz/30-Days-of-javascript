// function are blocks of resulble code..
// e.g if you have some thing that you want to you use again again then uxe function

// 1️⃣ Function Declarations
function hello (){
    console.log("hello");
}
hello ()

// ✅ Uses the function keyword.
// ✅ Must have a name (e.g., greet).
// ✅ Can be called before or after its definition (hoisted).

greet();  // Calling the function before its definition works!

function greet() {
    console.log("Hello, user!");
}

// 2️⃣ Function Expressions
// A function expression stores a function inside a variable.
const expression = function (){
    console.log("Hello functions");

}
expression () // ✅ Works!

// ✅ Function is assigned to a variable (greet).
// ✅ No function name is required (Anonymous Function).
// ✅ Not hoisted (You must define it before calling).

greet2(); 
// ❌ This will throw an error because function expressions are not hoisted like declarations.
const greet2 = function() {
    console.log("Hello, Moiz!");
};


// 🔍 Key Differences

// Feature	                    Function Declaration	                    Function Expression

// Hoisted?      	           ✅ Yes (Can be called before definition)	  ❌ No (Must be defined before calling)
// Name Required? 	           ✅ Yes	                                  ❌ No (Can be anonymous)
// Stored in a  Variable?	   ❌ No	                                      ✅ Yes


// 🔥 Which One to Use?
// - If you need hoisting (function declared before it's made), use Function Declarations.
// - If you want more flexibility (e.g., assign functions dynamically), use Function Expressions.

// 🚀 Quick Practice
// Try running functions like these in your browser console!

add(); // ✅ Works!
function add (){
    console.log(2536 + 7452);
}

sub() //  ❌ Error:
const sub = function (){
    console.log( 7452 -2536 );
}
sub()// ✅ Works!