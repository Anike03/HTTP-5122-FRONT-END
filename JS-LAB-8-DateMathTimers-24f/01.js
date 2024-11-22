// Set up the clock once the page loads
window.onload = initializeClock;

function initializeClock() {
    // Get the display elements and buttons
    var hourDisplay = document.getElementById("hoursOut");
    var minuteDisplay = document.getElementById("minsOut");
    var secondDisplay = document.getElementById("secsOut");
    var startButton = document.getElementById("btnStart");
    var stopButton = document.getElementById("btnStop");
    var intervalId = null;

    // Update the time on the page
    function updateTime() {
        var now = new Date();
        hourDisplay.textContent = addLeadingZero(now.getHours());
        minuteDisplay.textContent = ":" + addLeadingZero(now.getMinutes());
        secondDisplay.textContent = ":" + addLeadingZero(now.getSeconds());
    }

    // Add a zero if the time is a single digit
    function addLeadingZero(time) {
        if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }

    // Start the clock's update interval
    function startClock() {
        if (intervalId === null) { // Only start if it hasn't been set
            intervalId = setInterval(updateTime, 1000);
        }
    }

    // Stop the clock
    function stopClock() {
        clearInterval(intervalId);
        intervalId = null;
    }

    // Connect the start and stop functions to button clicks
    startButton.onclick = startClock;
    stopButton.onclick = stopClock;
}
