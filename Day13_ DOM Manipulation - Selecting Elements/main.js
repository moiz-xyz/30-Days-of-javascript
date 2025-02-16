// DOM (Document Object Model) manipulation allows you to dynamically change content, structure, and styles of a webpage using JavaScript.

// 1️⃣ Selecting Elements in the DOM
// JavaScript provides multiple ways to select elements from the DOM.

// 📌 Methods to Select Elements
// document.getElementById("idName")

// Selects an element by its id.
// Returns a single element (unique).

let heading = document.getElementById ("head");
console.log(heading); // <h1 id="head">Hello heading</h1>


// 2 document.getElementsByClassName("className")
// Selects elements by their class.
// Returns an HTMLCollection (like an array but not exactly)
let items = document.getElementsByClassName("list-item");
console.log(items);  // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]


//3 document.getElementsByTagName("tagName")

// Selects elements by tag name.
// Returns an HTMLCollection
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection of all <p> elements

// 4 document.querySelector("cssSelector")

// Selects only the first element that matches the given CSS selector.
let firstItem = document.querySelector(".list-item");
console.log(firstItem); // First <li> with class "list-item"

// 5 document.querySelectorAll("cssSelector")

let all = document.querySelectorAll ("p");
console.log(all);
// Selects all matching elements as a NodeList (like an array).

// 🎯 Quick Practice Tasks
// Try these to improve your skills:

// Select an element and change its text content.
// Change the background color of a button when clicked.
// Hide an element when a button is clicked.
// Add a new paragraph inside a div when a button is clicked.

// 🚀 Summary
// ✔ getElementById() – Selects an element by id
// ✔ getElementsByClassName() – Selects elements by class
// ✔ querySelector() – Selects first element that matches
// ✔ querySelectorAll() – Selects all matching elements

