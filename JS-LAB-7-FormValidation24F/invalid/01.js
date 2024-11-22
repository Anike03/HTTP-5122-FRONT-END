window.onload = function () {
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
    form.onsubmit = function () {
        // Reset all error styles initially
        nameField.style.backgroundColor = "";
        postalField.style.backgroundColor = "";
        speedField.style.backgroundColor = "";

        // Validation flags and focus tracking
        let valid = true;
        let firstInvalidElement = null;

        // Validate Speed of Delivery Field
        if (speedField.value === "0") {
            speedField.style.backgroundColor = "red";
            valid = false;
            firstInvalidElement = firstInvalidElement || speedField;
        }

        // Validate Name Field
        if (nameField.value.trim() === "") {
            nameField.style.backgroundColor = "red";
            valid = false;
            firstInvalidElement = firstInvalidElement || nameField;
        }

        // Validate Postal Code Field
        if (postalField.value.trim() === "") {
            postalField.style.backgroundColor = "red";
            valid = false;
            firstInvalidElement = firstInvalidElement || postalField;
        }

        // Focus on the first invalid element
        if (!valid) {
            firstInvalidElement.focus();
            return false; // Prevent form submission
        }

        // Assign validated values to the object
        var shipInfo = {
            name: nameField.value,
            pc: postalField.value,
            speed: speedField.options[speedField.selectedIndex].text,
            cost: speedField.value,
        };

        // Hide form and show the thank you message
        form.style.display = "none";
        thanksMessage.style.display = "block";
        thanksCustomer.innerHTML = shipInfo.name;
        thanksPC.innerHTML = shipInfo.pc;
        thanksCost.innerHTML = parseFloat(shipInfo.cost);
        thanksSpeed.innerHTML = shipInfo.speed;

        return false; // Prevent the actual form submission
    };
};
