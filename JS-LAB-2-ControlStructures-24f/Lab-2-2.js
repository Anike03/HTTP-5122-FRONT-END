//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hello 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username = "dart";
		// Correct password
		var pwd = "vader";
		// user name input
		var username ;
		// password input
		var yourpwd ;




//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var POPUP = prompt("Please enter your username:");
            
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
// Correct user name
console.log(POPUP);

//5. CREATE POPUP BOX FOR PASSWORD
var pwd = prompt("Enter your password")


//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

console.log(pwd);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(POPUP === username && pwd === pwd)

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{
	alert("Welcome Back" + " " + username);
	console.log("Login Successful");
}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else
 {
	alert("Invalid Username/password");
	console.log("Login Fail");
 }




