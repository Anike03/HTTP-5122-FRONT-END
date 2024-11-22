//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
function checkTemp(currentTemp) 
{
    if (currentTemp > 30 || currentTemp < -10)
    {
        return false;
    }
        return true;
}
    var userInput = prompt("What is the current temperature?");
//It expects to receive...
    
    var currentTemp = parseFloat(userInput);
    
    //var isSafe = (currentTemp >= 30 && currentTemp <= -10); 

//It will return...
    var isSafe = checkTemp(currentTemp);
    
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

if (!isSafe) 
    {
    alert("Yikes! This is no weather for dog walking!");
    }  
    else 
    {
    alert("You’re good, have a nice walk!");
    }

    



 