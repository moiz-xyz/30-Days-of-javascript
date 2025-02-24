// Classes and Inheritance in JavaScript
// JavaScript classes are a way to create reusable blueprints for objects. They were introduced in ES6 and make object-oriented programming (OOP) more structured.

// 1. JavaScript Classes
// A class in JavaScript is a template for creating objects with properties and methods.
class Person {
    constructor (name , age) {
        this.name = name
        this.age = age 
    }
    greet (){
        console.log(`Hello , my name is  ${this.name} and I am ${this.age} years old`); 
    }
}
const Person1 = new Person ("Moiz", 18)
Person1.greet()
const Person2 = new Person ("Usman", 20)
Person2.greet()
const Person3 = new Person ("Ahmed", 11)
Person3.greet()

// ✅ constructor() is a special method that runs when an object is created.
// ✅ Methods (like greet()) are functions inside a class.
// ✅ new keyword is used to create objects from the class.

// 2. Class Inheritance (Extending a Class)
// Inheritance allows a class to inherit properties and methods from another class using the extends keyword.
// Parent Class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child Class (inherits from Animal)
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the parent class constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks!`);
    }
  }
  
  // Creating an object
  const myDog = new Dog("Buddy", "Labrador");
  myDog.makeSound(); // Output: Buddy makes a sound.
  myDog.bark(); // Output: Buddy barks!

// ✅ extends is used to inherit from another class.
// ✅ super(name) calls the parent class constructor.
// ✅ The child class can add new properties and methods while inheriting existing ones


// 3. Method Overriding
// A subclass can override a method from the parent class by defining it again.
class Car {
    start() {
      console.log("Car is starting...");
    }
  }
  
  class ElectricCar extends Car {
    start() {
      console.log("Electric car is starting silently...");
    }
  }
  
  const tesla = new ElectricCar();
  tesla.start(); 
  // Output: Electric car is starting silently...
//   ✅ The start() method in ElectricCar overrides the start() method from Car.



// Key Takeaways:

// Feature	     Description
// Class	     Blueprint for creating objects
// Constructor	 Initializes object properties
// Methods	     Functions inside a class
// Inheritance   (extends)	Allows one class to inherit from another
// super()	     Calls parent class constructor
// Overriding	 Child class can replace parent methods

// Why Use Classes?
// ✅ More organized and structured code.
// ✅ Allows reusability with inheritance.
// ✅ Follows Object-Oriented Programming (OOP) principles.

