/* LAB 8.2 - STOP TIME */

// Create page load listener
window.onload = initializeClock;

// Initialize clock function
function initializeClock() {
    // Define variables for hours, minutes, seconds display elements
    var hourDisplay, minuteDisplay, secondDisplay;
    
    // Create a variable to store the interval timer
    var clockInterval;
    
    // FUNCTION THAT DISPLAYS THE CURRENT TIME
    function showCurrentTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Ensure hours, minutes, and seconds are two digits
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Display hours, minutes, and seconds in the HTML
        
		document.getElementById("hoursOut").innerHTML =	hours;
		document.getElementById("minsOut").innerHTML =	":" + minutes;
		document.getElementById("secsOut").innerHTML = ":" + seconds;

    }
    
    // FUNCTION TO START THE CLOCK
    function activateClock() {
        showCurrentTime(); // Show time immediately when "START" is clicked
        clockInterval = setInterval(showCurrentTime, 1000); // Update every second
    }
    
    // FUNCTION TO STOP THE CLOCK
    function deactivateClock() {
        clearInterval(clockInterval); // Stop the interval timer
        alert("Timer Stopped"); // Show an alert indicating the timer has stopped
    }
    
    // Set event listeners for the START and STOP buttons
    document.getElementById("btnStart").onclick = activateClock;
    document.getElementById("btnStop").onclick = deactivateClock;
}
