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

// Selects all matching elements as a NodeList (like an array).

// 2️⃣ Manipulating Elements
// After selecting elements, you can modify them.

// 📌 Changing Text Content
// innerText – Changes only visible text.
// textContent – Changes all text (even hidden text).
// innerHTML – Changes text and also allows inserting HTML.

let heading2 = document.getElementById("title");
heading.innerText = "Welcome to JavaScript!";  // Only changes visible text
heading.textContent = "New Heading";          // Changes all text
heading.innerHTML = "<span>Styled Heading</span>"; // Inserts HTML


// 📌 Changing Attributes
// You can change or add attributes dynamically.
let link = document.querySelector("a");
link.setAttribute("href", "https://google.com"); // Change href attribute
link.setAttribute("target", "_blank");  // Open in new tab
console.log(link.getAttribute("href")); // Get current href value

// 📌 Changing Styles
// You can modify CSS styles dynamically.
let box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";

// 📌 Adding & Removing Classes
// Adding a class: element.classList.add("className")
// Removing a class: element.classList.remove("className")
// Toggling a class: element.classList.toggle("className")
// Checking if a class exists: element.classList.contains("className")

let button = document.querySelector("#myButton");
button.classList.add("active");  // Add "active" class
button.classList.remove("inactive"); // Remove "inactive" class
button.classList.toggle("hidden"); // If "hidden" exists, remove it; otherwise, add it
console.log(button.classList.contains("active")); // true or false

// 3️⃣ Creating and Removing Elements
// You can add or remove elements dynamically in the DOM.

// 📌 Creating a New Element
let newDiv = document.createElement("div");
newDiv.innerText = "I am a new div!";
newDiv.classList.add("new-box");
document.body.appendChild(newDiv); // Add to body

// 📌 Removing an Element
let unwantedElement = document.querySelector(".remove-me");
unwantedElement.remove();  // Removes the element from the DOM

// 4️⃣ Event Listeners (Handling User Actions)
// You can listen to user interactions like clicks, keypresses, mouse movements, etc.

// 📌 Adding a Click Event
let btn = document.querySelector("#clickMe");

btn.addEventListener("click", function () {
    alert("Button Clicked!");
});

// 📌 Adding a Hover Event  
let box = document.querySelector(".box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
});

// 📌 Getting Input Value on Button Click
let inputField = document.querySelector("#userInput");
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
    console.log(inputField.value); // Logs user input
});

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
// ✔ innerText, textContent, innerHTML – Modify text
// ✔ setAttribute(), getAttribute() – Modify attributes
// ✔ style – Change CSS styles
// ✔ classList.add(), classList.remove() – Modify classes
// ✔ createElement(), appendChild(), remove() – Add/remove elements
// ✔ addEventListener() – Handle user interactions

