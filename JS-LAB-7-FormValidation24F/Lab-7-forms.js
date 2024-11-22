/* LAB 7 - SHIPPING FORM */
window.onload = function() {
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
        var shipInfo = {
            name: nameField.value,
            pc: postalField.value,
            speed: speedField.options[speedField.selectedIndex].text,
            cost: speedField.value,
        };

        // Validate Speed of Delivery Field
        if (shipInfo.cost === "0") {
            speedField.style.backgroundColor = "red";
            speedField.focus();
            return false; // Prevent form submission
        } else {
            speedField.style.backgroundColor = ""; // Reset background if valid
        }

        // Validate Name Field
        if (shipInfo.name === "") {
            nameField.style.backgroundColor = "red";
        } else {
            nameField.style.backgroundColor = ""; // Reset background if valid
        }

        // Validate Postal Code Field
        if (shipInfo.pc === "") {
            postalField.style.backgroundColor = "red";
        } else {
            postalField.style.backgroundColor = ""; // Reset background if valid
        }

        // Prevent submission if either name or postal code is empty
        if (shipInfo.name === "" || shipInfo.pc === "") {
            return false;
        }

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
