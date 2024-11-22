//######## LAB 2-3 EMAIL SIGNUP ########
alert("hello 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var mail;


//==== LOGIC =============

var mail = confirm("come on!join the mailing list");
if(mail === true)

{
   var mail =  prompt("Log in with your mail", "me@example.com");
    
 
   if(mail === "" || mail === null || mail === "me@example.com")
           alert("Thank you, Invalid Mail.");
   else 
        {
          alert("Thank you, our next newsletter will be sent to " + mail);
        }

}        
 else
{
    alert("Thank you, we will not bother you again \u{1F600}" );
}

