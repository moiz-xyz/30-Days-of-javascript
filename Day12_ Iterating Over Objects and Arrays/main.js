// Iterating Over Objects and Arrays in JavaScript 🚀
// In JavaScript, iteration means going through all items in an object or array one by one.
// Since objects and arrays are different, we use different methods to iterate over them

// 🔹 Iterating Over Objects
// Objects store data in key-value pairs. We can loop through them using:

// 1️⃣ for...in Loop (Best for Objects)
// The for...in loop iterates over all keys (property names) in an object

let std = {
    name : 'Moiz' , 
    age : 18,
    role :'Mern stack & Blockchain  Data-scientist'
}
for (const key in std) {
    console.log(key + ":" + std[key] );
}

// 📌 How It Works?

// key takes each property name (name, age, role).
// student[key] gives the value (Moiz, 18, Mern stack & Blockchain data scientist).

// 2️⃣ Object.keys() (Get Keys as an Array)
// This method returns an array of object keys. 

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
  };
  
  console.log(Object.keys(car));
  
//    Output:
//   ['brand', 'model', 'year']
// ✅ Looping through Keys:
Object.keys(car).forEach ( (key) => {
    console.log(key + ": " + car[key]);
})

// 3️⃣ Object.values() (Get Values as an Array)
// If you only need values, use Object.values().
console.log(Object.values(car));

/* Output:
['Toyota', 'Corolla', 2022]
*/

// 4️⃣ Object.entries() (Get Key-Value Pairs)
// Returns an array of [key, value] pairs, allowing easy looping.

Object.entries(car).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  /* Output:
  brand: Toyota
  model: Corolla
  year: 2022
  */
  