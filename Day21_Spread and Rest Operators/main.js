// The Spread and Rest operators (...) are powerful features in JavaScript that help handle arrays and objects efficiently. They look the same (...), but their usage is different.

// 1 Spread Operator (...)
//  The spread opeartor is used expand elements of an array or properties of an object

// Usage :
// Copying arrays/objects
// Merging arrays/objects
// Passing elements to functions

// A. Expanding an Array
const no = [1,2,3,4];
const newNo = [...no ,6,7,8,9]
console.log(newNo);
// ✅ It expands the numbers array and adds new elements.

// B. Copying an Array (Avoids Reference Issues)
const orignal = [10,20,30];
const copy = [...orignal];
copy.push(40)
console.log(orignal); // Output: [10, 20, 30]
console.log(copy);    // Output: [10, 20, 30, 40]
// ✅ The original array remains unchanged.

// C. Merging Two Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
// ✅ Combines arrays without modifying them.

// D. Expanding an Object
const user = {
    name : "Moiz",
    age : 19,
};
const update = {
    ...user,
    country :"Pakistan"
};
console.log(update);
// ✅ Adds new properties while keeping the original object unchanged.

// 2. Rest Operator (...)
// The rest operator is used to collect multiple elements into an array or object.

// Usage:
// Function parameters
// Array/object destructuring

// A. Function Arguments (Collecting Remaining Arguments)
function sum (...no) {
    return no.reduce( (total , no) => total + no , 0 )
}
console.log( sum (1,2,3,4) ); // 10
// ✅ It collects multiple arguments into an array.


// B. Destructuring Arrays
const fruits = ["Mango", "Apple", "Orange", "Banana"];
const [first , second , third ] = fruits ;
console.log(first);   // Mango
console.log(second);  // Apple
console.log(third);  // Orange 
// ✅ The rest variable collects the remaining elements.

// C. Destructuring Objects
const user2 = { name: "Moiz", age: 17, country: "Pakistan" };

const { name, ...otherDetails } = user;

console.log(name);      // Output: Moiz
console.log(otherDetails); // Output: { age: 17, country: "Pakistan" }
// ✅ It separates properties while collecting the remaining ones into otherDetails.


// Key Differences:

// Operator	     Purpose
// Spread (...)	 Expands elements into arrays/objects
// Rest   (...)	 Gathers multiple elements into an array/object

// Conclusion
// Use the Spread Operator when expanding elements (copying, merging).
// Use the Rest Operator when collecting multiple elements (functions, destructuring).