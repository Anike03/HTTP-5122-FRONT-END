/* LAB 7 - SHIPPING FORM */
window.onload = function() {
    var form = document.getElementById("shippingForm");
    var thanksMessage = document.getElementById("thanks_msg");
    var thanksCustomer = document.getElementById("thanksCustomer");
    var thanksPC = document.getElementById("thanksPC");
    var thanksSpeed = document.getElementById("thanksSpeed");
    var thanksCost = document.getElementById("thanksCost");

    // Object to store shipping information
    var shipInfo = {};

    // Set up onsubmit handler
    form.onsubmit = function() {
        // Get form fields
        var nameField = document.getElementById("in_Name");
        var postalField = document.getElementById("in_pc");
        var speedField = document.getElementById("in_Speed");

        var isValid = true;

        // Validate Name Field
        if (!nameField.value) {
            nameField.style.backgroundColor = 'red'; // Highlight empty field
            isValid = false; // Mark as invalid
        } else {
            nameField.style.backgroundColor = ''; // Reset if valid
        }

        // Validate Postal Code Field
        if (!postalField.value) {
            postalField.style.backgroundColor = 'red'; // Highlight empty field
            isValid = false; // Mark as invalid
        } else {
            postalField.style.backgroundColor = ''; // Reset if valid
        }

        // Validate Speed of Delivery Field
        if (speedField.value === "0") {
            speedField.style.backgroundColor = 'red'; // Highlight invalid selection
            isValid = false; // Mark as invalid
        } else {
            speedField.style.backgroundColor = ''; // Reset if valid
        }

        // If any field is invalid, return false to stop submission
        if (!isValid) {
            return false;
        }

        // If all fields are valid, store data in shipInfo and display thank you message
        // Store user inputs in shipInfo object
        shipInfo.name = nameField.value;
        shipInfo.pc = postalField.value;
        shipInfo.speed = speedField.options[speedField.selectedIndex].text;
        shipInfo.cost = parseFloat(speedField.value); // Cost is stored as a number

        // Hide form and show the thank you message
        form.style.display = "none";
        thanksMessage.style.display = "block";

        // Customize the thank you message
        thanksCustomer.textContent = shipInfo.name;
        thanksPC.textContent = shipInfo.pc;
        thanksSpeed.textContent = shipInfo.speed;
        thanksCost.innerHTML = parseFloat(shipInfo.cost);


        // Return false to prevent form submission
        return false;
    };
};
