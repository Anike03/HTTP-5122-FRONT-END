function validateUser() 

{
    var correctTeamNumber = 5;                       // The correct team number
     

                                                     // List of team members (use actual names)
            var teamMembers =                              
            {                           
                    "Rohit": "Rohit Sharma",
                    "Virat": "Virat Kohli",
                    "Dhoni": "Mahendra Singh Dhoni",
                    "Ravindra": "Ravindra Jadeja"
            };
            

    var teamNumber = prompt("🔢 Please enter your team number 🙏 :");


    if (teamNumber != correctTeamNumber)               // check if the team number is correct
        {
        alert("⚠️Access denied !⚠️ 😡 Incorrect team number 😡");
        return;
        }

    var firstName = prompt("Congratulations✅Team verified! 🙏 Please enter your first name: 🙏");

    if (firstName === null) 
        {
        alert("⚠️ Please enter a valid name ⚠️");
        return;
        }

    else if (teamMembers[firstName]) 
        {
        alert("🎉Welcome Back🎉, " + teamMembers[firstName] + " " + "!");
        } 
    else 
        {
        alert("🚫Access denied !🚫😡You are not a team member😡");
        }

}


validateUser();                       // Call the function to initiate the process
