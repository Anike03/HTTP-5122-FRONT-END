// First, declare and initialize 7 variables with 7 movie names.
var movie1 = "AVENGERS_ENDGAME";
var movie2 = "CAPTAIN AMERICA_CIVIL WAR";
var movie3 = "THOR_RAGNAROK";
var movie4 = "DOCTOR STRANGE_MADNESS OF MULTI-VERSE";
var movie5 = "SPIDER-MAN_FAR FROM HOME";
var movie6 = "ANT-MAN AND THE WASP";
var movie7 = "DEADPOOL AND THE WOLVERINE";

// Next, create a JavaScript array to hold these variables and represent your top 7 movie list.

const topMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
console.log("Top 7 Movies:");
for (var i = 0; i < topMovies.length; i++)    
{
    console.log("Movie " + (i + 1) + ": " + topMovies[i]);

//The user is asked, "Which top 7 movie would you like?"
//The default text will read, "Pick a number: 1-7

function getMovie() 
    {
            var userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");
            var movieIndex = parseInt(userInput);
    
    
            if (isNaN(movieIndex) || movieIndex < 1 || movieIndex > 7)

        {
            // Validate the user input

            alert("Please enter a number between 1 and 7!🙏");
            return getMovie();  // Stretch goal: Loop to re-ask the user for valid input
        } 
        else
        {

        alert('#'+ (movieIndex)+ " on the list is" + "  " + topMovies[movieIndex - 1]);
        
        }
    }
}


getMovie();
