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
    var projectInputs = document.querySelectorAll("input[name='f__project']");

    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultId = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");

    // Function to reset error styles
    function resetErrors() {
        [firstNameInput, lastNameInput, idInput, programInput].forEach(function (input) {
            input.style.backgroundColor = "";
        });
        projectCaption.style.removeProperty("background-color");
    }

    // Function to get the selected project
    function getSelectedProject() {
        for (var i = 0; i < projectInputs.length; i++) {
            if (projectInputs[i].checked) {
                return projectInputs[i].value;
            }
        }
        return null;
    }

    // Form submission handler
    function handleFormSubmit() {
        resetErrors(); // Clear any previous error styling
        var isValid = true;

        // Validation for each input
        if (firstNameInput.value === "") {
            firstNameInput.style.backgroundColor = "red";
            firstNameInput.focus();
            isValid = false;
        } else if (lastNameInput.value === "") {
            lastNameInput.style.backgroundColor = "red";
            lastNameInput.focus();
            isValid = false;
        } else if (!/^n\d{8}$/i.test(idInput.value)) {
            idInput.style.backgroundColor = "red";
            idInput.focus();
            isValid = false;
        } else if (programInput.value === "X") {
            programInput.style.backgroundColor = "red";
            programInput.focus();
            isValid = false;
        } else if (getSelectedProject() === null) {
            projectCaption.style.backgroundColor = "red";
            isValid = false;
        }

        // Display the result section if the form is valid
        if (isValid) {
            header.style.display = "none";
            form.style.display = "none";
            resultSection.style.display = "block";

            resultFname.textContent = firstNameInput.value;
            resultLname.textContent = lastNameInput.value;
            resultId.textContent = idInput.value;
            resultProgram.textContent = programInput.options[programInput.selectedIndex].text;
            resultProject.textContent = getSelectedProject();
        }

        return false; // Prevents the form from submitting
    }

    // Assign the handleFormSubmit function to the form's onsubmit event
    form.onsubmit = handleFormSubmit;
};
