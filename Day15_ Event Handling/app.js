// Event Handling in JavaScript
// In JavaScript, event handling refers to the process of responding to user interactions such as clicks, key presses, 
// mouse movements,  form submissions, and more.

// 1. What is an Event?
// An event is an action that occurs in the browser, like:

// Clicking a button (click)
// Typing in an input field (keydown, keyup)

// Moving the mouse (mousemove)
// Submitting a form (submit)

// 2. Event Handling Methods
// There are three main ways to handle events in JavaScript:

<button onclick="alert('Button Clicked!')">Click Me</button>
// This method is not recommended for larger projects because it mixes JavaScript with HTML.

// 2. Using JavaScript Property
// You can assign an event handler to an element using JavaScript.

/* <button id="btn">Click Me</button> */
let btn = document.getElementById("btn");
button.onclick = function() {
    alert("Button Clicked!");
  };

let btn2 = document.getElementById("btn");
btn.addEventListener ("click" , ()=>{
    alert ("Hello click event")
})

// ✅ Advantages of addEventListener():

// Allows multiple event handlers for the same event.
// Can remove event listeners when needed.
// Separates JavaScript from HTML.


// 3. Event Object (event)
// The event object provides information about the event.

/* <button id="btn">Click Me</button> */

  let button = document.getElementById("btn");

  button.addEventListener("click", function(event) {
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
  });

//   🔹 event.type → Returns event type (e.g., click).
//   🔹 event.target → Returns the element that triggered the event.

// 4. Common Event Types
// Event	   Description
// click	   User clicks an element
// dblclick	   User double-clicks an element
// mouseover   Mouse enters an element
// mouseout	   Mouse leaves an element
// keydown	   Key is pressed down
// keyup	   Key is released
// change	   Input value changes
// submit	   Form is submitted

// Conclusion
// Inline event handling (onclick) is simple but not recommended.
// Using JavaScript properties (element.onclick) is better but allows only one event.
// addEventListener() is the best approach because it allows multiple handlers and better control.