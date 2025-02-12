// 📌 What is an Array?
// An array is a special variable that can hold multiple values in a single variable.

// ✅ Example
let fruits = ["Apple" , "Mango", "Apple", "Oange "]
// 🔥 Common Array Methods in JavaScript
// 1️⃣ .push() → Adds an item at the end of an array.
 fruits.push ("Banana")
 console.log(fruits); // "Apple" , "Mango", "Apple", "Oange" , "Banana"

//  2️⃣ .pop() → Removes the last item from an array.
fruits.pop() // "Apple" , "Mango", "Apple", "Oange"

// 3️⃣ .unshift() → Adds an item at the beginning of an array.
let cars = ["BMW", "Audi"];
cars.unshift("Toyota");
console.log(cars); // Output: ["Toyota", "BMW", "Audi"]

// 4️⃣ .shift() → Removes the first item from an array.
let cities = ["Lahore", "Karachi", "Islamabad"];
cities.shift();
console.log(cities); // Output: ["Karachi", "Islamabad"]

// 5️⃣ .splice() → Removes, replaces, or adds elements at a specific index.
let students = ["Ali", "Ahmed", "Sara", "Zain"];
students.splice(1, 2);  // Removes "Ahmed" and "Sara"
console.log(students); // Output: ["Ali", "Zain"]

// splice(index, deleteCount, newItem1, newItem2, ...)
// Example: Add a new item at index 1.
students.splice(1, 0, "Hassan");
console.log(students); // Output: ["Ali", "Hassan", "Zain"]

// 6️⃣ .slice() → Returns a copy of a part of the array.
let letters = ["A", "B", "C", "D", "E"];
let slicedLetters = letters.slice(1, 4); 
console.log(slicedLetters); // Output: ["B", "C", "D"]
// .slice(startIndex, endIndex) (endIndex is not included)

// 7️⃣ .indexOf() → Finds the index of a value.
let subjects = ["Math", "Physics", "Biology"];
console.log(subjects.indexOf("Physics")); // Output: 1
console.log(subjects.indexOf("History")); // Output: -1 (not found)

// 8️⃣ .includes() → Checks if a value exists in an array (true/false).
let devices = ["Laptop", "Phone", "Tablet"];
console.log(devices.includes("Phone")); // Output: true
console.log(devices.includes("PC"));    // Output: false

// 9️⃣ .concat() → Joins two arrays together.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// 🔟 .join() → Converts an array into a string.
let words = ["Hello", "World"];
let sentence = words.join(" ");
console.log(sentence); // Output: "Hello World"


// 1️⃣1️⃣ .reverse() → Reverses the order of an array.
let nums = [1, 2, 3, 4];
nums.reverse();
console.log(nums); // Output: [4, 3, 2, 1]

// 1️⃣2️⃣ .sort() → Sorts an array alphabetically or numerically.
let alphabets = ["D", "A", "C", "B"];
alphabets.sort();
console.log(alphabets); // Output: ["A", "B", "C", "D"]

// ⚠ For numbers, sorting may not work correctly:
let numList = [40, 100, 1, 5, 25];
numList.sort();  
console.log(numList); // Output: [1, 100, 25, 40, 5] (incorrect)

// ✅ Use a compare function for correct sorting:
numList.sort((a, b) => a - b);
console.log(numList); // Output: [1, 5, 25, 40, 100]

// 1️⃣3️⃣ .map() → Creates a new array by modifying each element.
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

// 1️⃣4️⃣ .filter() → Creates a new array with elements that match a condition.
let ages = [12, 20, 25, 17, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [20, 25, 30]

// 1️⃣5️⃣ .reduce() → Reduces an array to a single value (sum, product, etc.).
let values = [10, 20, 30];
let total = values.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 60

// 🌟 Summary Table:
// Method	    Action

// .push()	    Add at end
// .pop()	    Remove from end
// .unshift()	Add at beginning
// .shift()	    Remove from beginning
// .splice()	Add/remove at specific index
// .slice()	    Copy a portion of the array
// .indexOf()	Find index of a value
// .includes()	Check if a value exists
// .concat()	Combine arrays
// .join()	    Convert array to string
// .reverse()	Reverse array order
// .sort()	    Sort array
// .map()	    Modify each element
// .filter()	Select specific elements
// .reduce()	Reduce array to single value






 