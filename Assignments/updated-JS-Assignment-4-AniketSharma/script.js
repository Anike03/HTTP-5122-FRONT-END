window.onload = function () {
    // Get references to form elements
    var form = document.forms.ixdForm;
    var header = document.getElementById("welcome");
    var resultSection = document.getElementById("result");
    var projectCaption = document.getElementById("caption_project");

    var firstNameInput = document.getElementById("in_fName");
    var lastNameInput = document.getElementById("in_lName");
    var idInput = document.getElementById("in_id");
    var programInput = document.getElementById("in_program");

    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultId = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");

    // Form submission handler
    function handleFormSubmit() {
        // Validate first name
        if (firstNameInput.value === "") {
            firstNameInput.style.backgroundColor = "red";
            firstNameInput.focus();
            return false; // Stops further checks
        }

        // Validate last name
        if (lastNameInput.value === "") {
            lastNameInput.style.backgroundColor = "red";
            lastNameInput.focus();
            return false;
        }

        // Validate ID format
        if (!/^n\d{8}$/i.test(idInput.value)) {
            idInput.style.backgroundColor = "red";
            idInput.focus();
            return false;
        }

        // Validate program selection
        if (programInput.value === "X") {
            programInput.style.backgroundColor = "red";
            programInput.focus();
            return false;
        }

        // Validate project selection
        var selectedProject = document.querySelector("input[name='f__project']:checked");
        if (selectedProject===null) {
            projectCaption.style.backgroundColor = "red";
            return false; // Stops further checks
        }

        // If all validations pass

            header.style.display = "none";
            form.style.display = "none";
            resultSection.style.display = "block";
            resultFname.textContent = firstNameInput.value;
            resultLname.textContent = lastNameInput.value;
            resultId.textContent = idInput.value;
            resultProgram.textContent = programInput.options[programInput.selectedIndex].text;
            resultProject.textContent = selectedProject.value;
    

        return false; // Prevents the form from submitting
    }

    // Assign the handleFormSubmit function to the form's onsubmit event
    form.onsubmit = handleFormSubmit;
};
