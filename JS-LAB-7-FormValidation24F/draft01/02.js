/* LAB 7 - SHIPPING FORM */
window.onload = function() {
    // Get references to form and message elements
    var form = document.forms.form_ship;
    
    var nameField = document.getElementById("in_Name");
    var postalField = document.getElementById("in_pc");
    var speedField = document.getElementById("in_Speed");
    var thanksMessage = document.getElementById("thanks_msg");
    var thanksCustomer = document.getElementById("thanksCustomer");
    var thanksPC = document.getElementById("thanksPC");
    var thanksSpeed = document.getElementById("thanksSpeed");
    var thanksCost = document.getElementById("thanksCost");

    // Set up the form submission handler
    form.onsubmit = function() {
        var isValid = true;

        var shipInfo = {
            name: nameField.value,
            pc: postalField.value,
            speed: speedField.options[speedField.selectedIndex].text,
            cost: speedField.value,
        };

        // Validate Speed of Delivery Field
        if (shipInfo.cost === "0") {
            speedField.style.backgroundColor = "red";
            isValid = false; // Mark as invalid
        } else {
            speedField.style.backgroundColor = ""; // Reset background if valid
        }

        // Validate Name Field
        if (shipInfo.name === "") {
            nameField.style.backgroundColor = "red";
            isValid = false; // Mark as invalid
        } else {
            nameField.style.backgroundColor = ""; // Reset background if valid
        }

        // Validate Postal Code Field
        if (shipInfo.pc === "") {
            postalField.style.backgroundColor = "red";
            isValid = false; // Mark as invalid
        } else {
            postalField.style.backgroundColor = ""; // Reset background if valid
        }

        // If any field is invalid, return false to prevent form submission
        if (!isValid) {
            return false;
        }

        // Hide form and show the thank you message
        form.style.display = "none";
        thanksMessage.style.display = "block";
        thanksCustomer.innerHTML = shipInfo.name;
        thanksPC.innerHTML = shipInfo.pc;
        thanksCost.innerHTML = parseFloat(shipInfo.cost).toFixed(2); // Format cost to 2 decimal places
        thanksSpeed.innerHTML = shipInfo.speed;

        return false; // Prevent the actual form submission
    };
};






























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
    form.onsubmit = function(event) {
        event.preventDefault(); // Stop the form from submitting

        // Get form fields
        var nameField = document.getElementById("in_Name");
        var postalField = document.getElementById("in_pc");
        var speedField = document.getElementById("in_Speed");

        var isValid = true;

        // Validate Name Field
        if (!nameField.value) {
            nameField.style.backgroundColor = 'red'; // Highlight empty field
         // nameField.focus();
			isValid = false; // Mark as invalid
        } else {
            nameField.style.backgroundColor = ''; // Reset if valid
        }

        // Validate Postal Code Field
        if (!postalField.value) {
            postalField.style.backgroundColor = 'red'; // Highlight empty field
         // postalField.focus(); 
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

        // If all fields are valid, store data in shipInfo and display thank you message
        if (isValid) {
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
        }
    };
};








