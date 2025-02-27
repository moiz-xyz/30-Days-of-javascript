// file: export.js

// 1. Named Export
// You can export multiple things from a file using named exports.
export const add = (a,b) => a + b;
export const sub = (a,b) => a - b;

// 2. Default Export
// Each file can have only one default export.
const greet = ()=> { "Hello"}
export default greet    


// file: export.js
export const sayHi = () => "Hi!";
export default function sayBye() {
  return "Bye!";
}
