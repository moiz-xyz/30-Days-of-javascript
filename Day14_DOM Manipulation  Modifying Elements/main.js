// Manipulating Elements
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

// ✔ innerText, textContent, innerHTML – Modify text
// ✔ setAttribute(), getAttribute() – Modify attributes
// ✔ style – Change CSS styles
// ✔ classList.add(), classList.remove() – Modify classes
// ✔ createElement(), appendChild(), remove() – Add/remove elements
// ✔ addEventListener() – Handle user interactions
