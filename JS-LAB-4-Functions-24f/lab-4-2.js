//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION

function calculateAverage(number1, number2, number3, number4, number5)


// This function takes five numbers and returns their average to one decimal place.
{
    var average = (number1 + number2 + number3 + number4 + number5) / 5;
    // var average.toFixed(1);
    return average.toFixed(1);
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var course1 = 74;  
var course2 = 80;  
var course3 = 78;  
var course4 = 60; 
var course5 = 75;  

var overallAverage = calculateAverage(course1, course2, course3, course4, course5);

overallAverage = parseFloat(overallAverage);

if (overallAverage >= 70) {
  alert("Success! Your overall average is " + overallAverage);
} else {
  alert("Review required. Your overall average is " + overallAverage);
}






















