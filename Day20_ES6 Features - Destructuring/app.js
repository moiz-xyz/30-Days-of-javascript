//  ES6 Features - Destructuring
// its sllos you to unpack values  from arrsys or properties from objects

// 1- Array Destructuring
const numbers = [1,2,3,4];
const [first , second  ,third , fourth ] = numbers ;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
// 💡 Explanation:

// The values in numbers are assigned to first, second, and third using destructuring syntax.

// Example 2: Skipping Elements
const color = ["Red", "Green", "Blue" , "Yellow"];
const [ primary, ,seconndry ] = color;
console.log(primary); // red 
console.log(seconndry); // blue
// 💡 Explanation:
// The second element (green) is skipped using an empty space , ,.


// Example 3: Swapping Variables
// Destructuring can be used to swap values without using a temporary variable.
let a = 10 ; 
let b = 5 ; 
[ a , b] = [ b , a ] // swap 

console.log(a); // 10
console.log(b); // 5

// 2. Object Destructuring
// IT allows extraccting the value from objects and storing them in variables

// Example 1: Basic Object Destructuring

const myData = {
    name : "Moiz", 
    age : 18 ,
    country : "Pakistan"
}
const { name, age, country } = person;

console.log(name);   // "Moiz"
console.log(age);    // 18
console.log(country); // "Pakistan"

// Explanation:

// The keys name, age, and country are extracted from person and stored in separate variables.

// Example 2: Using Different Variable Names
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
  };
  const {brand : carBrand , model : carModel} = car;
  console.log(carBrand); // Toyota 
  console.log(carModel); // Corolla 

// 💡 Explanation:
// brand is assigned to carBrand, and model is assigned to carModel using : newVariableName.

// Example 3: Default Values
// If a property does not exist in the object, you can assign a default value.
const user = { username : "Ali"}
const {username , email = "abc@gmail.com"} = user;
console.log(username); // Ali
console.log(email); // abc@gmail.com

// 3. Nested Destructuring
// You can also destructure nested objects.

const student = {
    nameOfStd : "Moiz",
    marks : {
        maths : 98,
        science : 90
    }
}
const { nameOfStd , marks : {maths , science} } = student ;

console.log(name);  // "Ali"
console.log(math);  // 90
console.log(science); // 85


// 4. Function Parameter Destructuring
// Destructuring is useful in function parameters.

function printUser ( {name , age }){
    console.log(`Name: ${name}, Age: ${age}`);
}
const user1 = {name : "AliRaza" , age : 18} ; 
console.log(user1);  // Name: AliRaza, Age: 18

// 💡 Explanation:
// Instead of user.name and user.age, destructuring is done directly in the function parameters

// 5. Destructuring with Rest Operator (...)
// The rest operator (...) helps when you need to collect remaining values.
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const [firstFruit, ...restFruits] = fruits;

console.log(firstFruit);      // "Apple"
console.log(restFruits);     // ["Banana", "Mango", "Orange"]


// Conclusion
// Array Destructuring:   Extracts values from arrays.
// Object Destructuring:  Extracts values from objects.
// Skipping Elements:     Use , , to skip values.
// Swapping Variables:    No need for a temporary variable.
// Nested Destructuring:  Works for objects inside objects.
// Function Parameter     Destructuring: Extracts values inside functions.
// Rest Operator (...):   Collects remaining values.