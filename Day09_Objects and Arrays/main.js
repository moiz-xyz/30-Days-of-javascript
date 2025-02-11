// Both objets and arrays are used to hsoe multipe value

// 1️⃣  Array 
// it can be creaated by using []
let arr1 = [1,2,3,4,5,6,7,8,10]
console.log(arr1); // 1,2,3,4,5,6,7,8,10

let fruits = ["Apple" , "Mango", "Grapes"]
console.log(fruits); // array of three elemets

// Accessing Elements in an Array
// Each item in an array has an index number starting from 0.
console.log(fruits[0]); // Apple 
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Grapes

// Modifying an arry 
fruits[1] = "Banana" // Changing "Mango" to "Banana"
fruits[4] = "Mango"; // adding Mango at last
console.log(fruits); // Output: ["Apple", "Banana", "Grapes" ,"Mango"]

// Changing "Banana" to "Orange"
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

// Adding and Removing Elements
// .push() → Adds an item to the end
// .pop() → Removes the last item
// .unshift() → Adds an item at the beginning
// .shift() → Removes the first item


// 2️⃣ Objects 
// An object is a collection of key-value pairs. It helps store related information in one place.

// How to Create an Object
// Objects are written inside { } using keys (names) and values (data).
let data = {
    name : "Moiz",
    role : "Javascript developer" ,
    experience : "2 years"
}
// 👉 This object has three properties:

// name : "Moiz",
// role : "Javascript developer" ,
// experience : "2 years"

// Accessing Object Properties
// You can access values using dot notation or bracket notation.
console.log(data.name);
console.log(data.role);
console.log(data.experience);

// Modifying Object Properties
// You can update or add new properties.

data.role = "MERN Stack developer"  /// Update age
data.location = "Pakistan" // Add new property
console.log(data);

// Objects Inside Arrays
// You can have an array of objects.
let students = [
    { name: "Ali", age: 16 },
    { name: "Ayesha", age: 17 },
    { name: "Ahmed", age: 18 }
  ];
  
  console.log(students[0].name); // Output: Ali
  console.log(students[2].age);  // Output: 18

//   📌 Summary
// Feature	        Arrays                 	  Objects
// Structure	    List of values	          Key-value pairs
// Syntax	        let arr = [1, 2, 3];	  let obj = {name: "Moiz", age: 17};
// Accessing	    arr[0]	                  obj.name
// Modifying	    arr[1] = 5;	              obj.city = "Lahore";
  