/*
    Author: Michael Harhay

    Date created: 16/07/2024
    Date modified: 05/08/2024

    Functionality: Contains JS scripts for personal website
*/

// --- Button Animation Control --- //
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the id of the active button from session storage
    var activeButtonId = sessionStorage.getItem("activeButtonId");
    
    // If there's an active button id stored, set the active class to the corresponding button
    if (activeButtonId) {
        var activeButton = document.getElementById(activeButtonId);
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Add click event listeners to the buttons to store the active button id in session storage
    var buttons = document.querySelectorAll("nav a");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            sessionStorage.setItem("activeButtonId", button.id);
        });
    });
});


// --- Typewriter Effect --- //
var app = document.getElementById("paragraph");

var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

Typewriter
    .pauseFor(1000)
    .typeString("A driven, goal-oriented computer engineering student with a love for all things software, and a growing interest in artificial intelligence and data. A diligent, creative problem-solver with a dedication to excellence and a love for learning and self-improvement. A confident, accountable leader who brings out the best in others.")
    .pauseFor(2000)
    .start()
