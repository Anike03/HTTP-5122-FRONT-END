//######## LAB 2-1 FILE DELETE CONFIRMATION ########
alert("hello 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
      // Code to delete the file
      
      var xyz = confirm("need to delete the file");
     

//2. IF USER CLICKS OKAY, POPUP messageOut WITH yesMessage.
if (xyz=== true)
      {

            alert(messageOut + yesMessage);
      }    


//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.
      else(xyz=== false)
      {
            alert(messageOut + noMessage);
      }     



