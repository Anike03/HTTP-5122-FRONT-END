//LAB 9-DATA STORAGE: INDEX PAGE
// Function to create a cookie
function createCookie(name, value, days) {
    // Create a date object for the expiration time
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookieValue(name) {
    var nameWithEquals = name + "=";
    var cookies = decodeURIComponent(document.cookie).split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(nameWithEquals) === 0) {
            return cookie.substring(nameWithEquals.length, cookie.length); 
        }
    }
    return ""; 
}

// Code to run when the page loads
window.onload = function () {
    // Get stored values from cookies
    var userName = getCookieValue('userName');
    var userColor = getCookieValue('userColor');

    // Update the page based on stored cookies
    if (userName && userColor) {
        document.getElementById('newMsgBox').innerText = "Welcome, " + userName + "!";
        document.body.style.backgroundColor = userColor;
    } else {
        document.getElementById('newMsgBox').innerText = "Welcome!";
        document.body.style.backgroundColor = '#c0c0c0';
    }

    // Handle the submit button click
    document.querySelector('input[type="submit"]').onclick = function () {
        // Get user inputs
        var name = document.getElementById('inName').value.trim();
        var color = document.getElementById('inColor').value;

        // Validate the name input
        if (!name) {
            alert("Please enter your name.");
            document.getElementById('inName').focus(); // Focus on the name input
            return false; // Stop the button from submitting
        }
        
        createCookie('userName', name, 1);
        createCookie('userColor', color, 1);
        // Refresh the page to see the changes
        location.reload();
        return false; // Stop the button from submitting
    };

    // Handle the delete button click
    document.getElementById('btnDel').onclick = function () {
        // Clear the cookies by setting their expiration to the past
        createCookie('userName', '', -1);
        createCookie('userColor', '', -1);

        document.getElementById('newMsgBox').innerText = "Welcome!";
        document.body.style.backgroundColor = '#c0c0c0';

        location.reload();
        return false; // Stop the button from submitting
    };
};
