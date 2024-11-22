/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.addEventListener("load", countdownToDueDate);

//create page load function
function countdownToDueDate() {
	//create variables for required HTML elements
	var todayDataElement = document.getElementById("todayData"); // For showing today's date
    var finalDataElement = document.getElementById("finalData"); // For showing the final due date
    var dueDataElement = document.getElementById("dueData");     // For showing days left
    var countMsgElement = document.getElementById("countMsg");
	//create variables for now date and due date
	var now = new Date(); 
    // var dueDate = new Date("November 07, 2024 18:00:00"); 
	var dueDate = new Date("December 13, 2024 18:00:00"); 

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayDataElement.textContent = now.toDateString();    // Shows today's date in a readable format
    finalDataElement.textContent = dueDate.toDateString(); // Shows the final due date in a readable format

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var timeDifference = dueDate.getTime() - now.getTime();

	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS

	// const daysDifference = Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60 * 24));
	var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Logic to check if due date has passed and output appropriate message
	if (timeDifference < 0) {
		// If the due date has passed, show how many days it has been overdue
		countMsgElement.textContent = "The deadline has been passed by " + daysDifference + " days.";
	} else {
		// If the due date hasn't passed, show the number of days remaining
		countMsgElement.textContent = "The Pet Project is due in " + daysDifference + " days.";
	}
}	