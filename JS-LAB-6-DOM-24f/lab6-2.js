//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = initialize;


//'WRAPPER' FUNCTION FOR DOM LOGIC
function initialize() {


	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
    var buttonBox = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function showPrompt() {
        if (confirm("Do you want to see something?")) {
            mysteryBox.style.display = "none";
            buttonBox.style.display = "block";
        }
    }


	//FUNCTION TO CHANGE buttonBox
6
    function surprise() {
        buttonBox.style.width = "600px";
        buttonBox.style.backgroundColor = "orange";
        buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
    }
    

	//SETUP LISTENERS
	mysteryBox.addEventListener("mouseover", showPrompt);
    buttonBox.addEventListener("click", surprise);

}//END onload FUNCTION
