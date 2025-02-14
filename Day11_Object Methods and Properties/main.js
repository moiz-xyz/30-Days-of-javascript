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
//  for...in Loop
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