// Define a Function
function sayOuch() {
  alert("Hey, you just clicked the logo!");
}

// Use a CSS selector to identify an element
var logo = document.querySelector("img");

// Assign the function to the onclick event on that element
logo.onclick = sayOuch;

// Get the button by its id
const button = document.getElementById("thanks-button");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Show the "thank you" message in a pop-up window
  alert("Thank you for visiting our website!");
});
