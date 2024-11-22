//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var cart = [];
var runningTotal = 0;
var shippingThreshold = 35;
var userInput;


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (runningTotal < shippingThreshold) 
	{
    //GET ITEM COST FROM USER
	userInput = prompt("Enter the price of the item:");

	
	//CONVERT USER INPUT TO A NUMBER
	var itemCost = parseInt(userInput);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	runningTotal+= itemCost;
	
	
	//PUSH ITEM COST TO CART ARRAY
	
	cart.push(itemCost);
	}
	


//SEND POPUP MESSAGE TO USER

alert("Your shipping for this order will be free! Total value of your purchases is $" + runningTotal);

//SEND OUTPUT TO CONSOLE

console.log("Item prices: " + cart.join(" | "));