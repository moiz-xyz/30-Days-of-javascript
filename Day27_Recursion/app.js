// Recursion in JavaScript
// Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller instances of the same problem.

// Basic Structure of Recursion
// A recursive function has two main parts:

// Base Case → A condition where the recursion stops.
// Recursive Case → The function calls itself with a smaller input.

// Example 1: Factorial Using Recursion
// Factorial of a number n (n!) is calculated as:
// n!=n×(n−1)×(n−2)×⋯×1

function Factorial (n){
    if ( n === 0 || n === 1){
        return 1;
    }
    return n * Factorial( n - 1 );
}
console.log(Factorial (5) ); // 120




// Key Points to Remember
// ✅ Every recursion must have a base case to avoid infinite loops.
// ✅ Recursive functions use the call stack, so too many recursive calls may cause a stack overflow.
// ✅ Tail recursion optimization can help in some cases but is not always available in JavaScript.

