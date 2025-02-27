// In JavaScript, modules allow you to break your code into smaller, reusable files. This makes your code more organized and easier to maintain

// 📌 Exporting in JavaScript Modules
// To share functions, variables, or classes from one file to another, you use export.

// 1. Named Export
// You can export multiple things from a file using named export

// file: import.js
import {add , sub } from "./export.js"

console.log( add(3,4)); // 7
console.log( sub(10,4)); // 6
// 🔥 Note: You need to use the same names when importing


// 2. Default Import
//  import a default export, you can name it anything:
import {greetfunction} from "./export.js"
console.log(greet ());

// 📌 Importing in JavaScript Modules
// You can import everything using *:
import * as MathOperations from './math.js';

console.log(MathOperations.add(2, 3)); // 5
console.log(MathOperations.subtract(7, 2)); // 5

// 📌 Mixing Named and Default Exports
// You can use both named and default exports together.

// file: main.js
import sayBye, { sayHi } from './utils.js';

console.log(sayHi()); // "Hi!"
console.log(sayBye()); // "Bye!"

// 📌 When to Use Modules?
// ✅ When you want cleaner code
// ✅ When working on large projects
// ✅ To reuse code across files

// 📌 Final Note
// Modules work natively in modern browsers with <script type="module">
// If using Node.js, enable modules with "type": "module" in package.json
