// LAB 9 - DATA STORAGE: PRODUCTS PAGE
// Function to get a cookie by its name
function getCookie(name) {
    var nameWithEquals = name + "=";
    var cookies = decodeURIComponent(document.cookie).split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim(); // Remove extra spaces
        if (cookie.indexOf(nameWithEquals) === 0) {
            return cookie.substring(nameWithEquals.length); // Return the cookie value
        }
    }
    return ""; // Return an empty string if the cookie is not found
}

// Code to run when the page loads
window.onload = function () {
    // Get the saved name and color from cookies
    var userName = getCookie('userName');
    var userColor = getCookie('userColor');

    // Check if we have the data from cookies
    if (userName && userColor) {
        // If data exists, update the message and background color
        document.getElementById('newMsgBox').innerText = "Welcome, " + userName + "!";
        document.body.style.backgroundColor = userColor;
    } else {
        // If no data, show the default message and background color
        document.getElementById('newMsgBox').innerText = "Welcome!";
        document.body.style.backgroundColor = '#c0c0c0'; // Default gray color
    }
};
