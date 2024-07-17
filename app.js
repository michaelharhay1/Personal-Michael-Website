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