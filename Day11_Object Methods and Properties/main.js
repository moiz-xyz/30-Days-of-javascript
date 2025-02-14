// In JavaScript, objects are collections of key-value pairs, where properties store data, and methods perform actions

// 1. Object Properties
// Properties are variabkes inside an object which store string ,number or arrays or objects etc
let data = {
    name : "Ali",
    role : "front-end-developer",
    isStudent : true
}
console.log(data.name);
console.log(data.role);
console.log(data.isStudent);
// 📌 Explanation:

// name, role, and isStudent are properties.
// We access properties using objectName.propertyName or objectName["propertyName"].

// 2. Adding and Updating Properties
// You can add new properties or update existing ones.

let carDetail = {
    brand : "Kia",
    model : "Sportage"
}
console.log(carDetail);

// Adding a new properiets
carDetail.year = 2023

// Updating a property
carDetail.model = "Picanto";

console.log(carDetail); // Output: { brand: 'Kia', model: 'Picanto', year: 2023 }

// 3. Deleting Properties
// Use the delete keyword.
delete carDetail.year
console.log(carDetail); // Output: { brand: 'Kia', model: 'Picanto'}


// 4. Object Methods
// Methods are functions inside objects that perform actions.

let user = {
    name : "Moiz",
    greet : () =>{
        return("Hello" + this.name);
    }
}
console.log(user.greet () ); // Hello moiz
// 📌 Explanation:

// greet is a method that returns a greeting message.
// this.name refers to the name property of the current object.

// 5. Shorthand Method Syntax
// A shorter way to define methods:

let user2 = {
    name: "Moiz",
    greet() {  // No need for `function` keyword
      return "Hello, " + this.name;
    }
  };
  
  console.log(user.greet()); // Output: Hello, Moiz
  
//   6. Checking if a Property Exists
// Use hasOwnProperty() or the in operator.
  let students_Data = {
    nameOfstd : "Ahmed",
    age : 19 ,
    f_Name : "Asif",
    class : 12,
    // Eligible_for_enrollin : false 
  }
  console.log(students_Data.hasOwnProperty("nameOfstd")); // true
  console.log( students_Data.hasOwnProperty("Eligible_for_enrolling")); // false 
  
  // using in operator
  console.log("nameOfstd" in students_Data); // true
  console.log("Eligible_for_enrollin" in students_Data);
  

//   7. Looping Through Object Properties
// a_Using for...in Loop
// The for...in loop allows you to iterate over all keys (property names) in an object.

let student = {
  name: "Ali",
  age: 20,
  course: "JavaScript"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

/* Output:
name: Ali
age: 20
course: JavaScript
*/
// // 📌 Explanation:

// // key gets the property name (name, age, course).
// // student[key] gets the value of that property (Ali, 20, JavaScript).
// This loop goes through each property and prints its name and value.

// b Using Object.keys() to Get Keys
// Object.keys(object) returns an array of property names, so we can use a forEach loop
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};

Object.keys(car).forEach(function(key) {
  console.log(key + ": " + car[key]);
});

/* Output:
brand: Toyota
model: Corolla
year: 2022
*/

// 📌 How It Works?

// Object.keys(car) gives ["brand", "model", "year"].
// .forEach() runs a loop for each key in the array.

// c. Using Object.values() to Get Values Only
// If you only want the values of an object, use Object.values().
let phone = {
  brand: "Samsung",
  model: "S23",
  price: 1200
};

console.log(Object.values(phone));

/* Output:
['Samsung', 'S23', 1200]
*/

// d. Using Object.entries() to Get Keys and Values Together
// Object.entries(object) returns an array of key-value pairs.

let laptop = {
  brand: "HP",
  price: 1500,
  color: "Silver"
};

Object.entries(laptop).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/* Output:
brand: HP
price: 1500
color: Silver
*/

// 📌 Explanation:

// Object.entries(laptop) gives an array: [["brand", "HP"], ["price", 1500], ["color", "Silver"]].
// We use [key, value] to get both key and value in the loop.


// When to Use Which   Loop?
// Method	           When to Use?
// for...in	           When you need to loop through all properties of an object.
// Object.keys()	   When you only need keys and want an array to loop through.
// Object.values()	   When you only need values.
// Object.entries()	   When you need both keys and values.



// 8. Object.keys(), Object.values(), Object.entries()
// JavaScript provides built-in methods to work with object properties.

let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
  };
  console.log(Object.keys (product)); // // Output: ['name', 'price', 'brand']

  console.log(Object.values(product)); // Output: ['Laptop', 50000, 'Dell']

console.log(Object.entries(product)); 
// Output:
// [
//   ['name', 'Laptop'],
//   ['price', 50000],
//   ['brand', 'Dell']
// ]

// Practice Challenge 🎯
// Try creating an object "phone" with properties like brand, model, and a method call() that returns "Calling...".