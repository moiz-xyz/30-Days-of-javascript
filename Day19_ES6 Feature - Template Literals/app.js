/// Template literals also clled template strings are an ES6 feature that provides a  more readable and a flexable way to handle 
// strings They allow embedding expressions, multi-line strings, and string interpolation using backticks (`) instead of regular quotes (' or ").


// 1 Synaax of template literals 
//  They are exectured by  (` `) by backticks 
let mssagae =  ` Hello world`;
console.log(mssagae);


// 2 String Interpolation  (Variable Subsititution)
// One of the biggest of tesmplate literals are that they allow inserting  of strings and expression inside ${}
let myName = "Moiz";
let myage = 19;
let mesg = `Hello I am ${myName} and I am ${myage} years old`;
console.log(mesg);

// 3. Multi-line Strings
// In ES5, creating multi-line strings required \n (newline character) or concatenation.

// Before ES6 (using \n or + concatenation):
 
let oldWay = "This is line 1\n" +
             "This is line 2\n" +
             "This is line 3";
console.log(oldWay);
// With Template Literals:
let newWay = `This is line 1
This is line 2
This is line 3`;
console.log(newWay);
// ✅ No need to use \n, just press enter!

// 4. Expressions in Template Literals
// You can embed expressions inside ${}.
let x = 5 ;
let y = 10;
let sum = `the sum is ${x} and ${y} is ${x+y}` // output is 15
// ✅ You can use mathematical expressions, function calls, or even ternary operators inside ${}.


// Why Use Template Literals?
// ✅ Cleaner & More Readable - No need for + concatenation.
// ✅ Supports Multi-line Strings - No need for \n.
// ✅ Easier String Interpolation - Just use ${} instead of +.
// ✅ Supports Expressions - Directly include calculations.
// ✅ Advanced Features - Like tagged templates.