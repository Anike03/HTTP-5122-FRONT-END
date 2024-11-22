//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {

//2. Add the required properties to your object.

    lastName: "sharma",
    branchNumber: 542746514,
    accountBalance: 500.25,
    interestRate: 1.03, // 3% interest rate
    multipleAccounts: false, // Add a new boolean property

//3. Add your first method and test it. Remember, the methods will change the properties of the object.    

    makeDeposit: function(amount) 
    {
        this.accountBalance += amount;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    },
//4. Add your second method and test it.    
    makeWithdrawal: function(amount) 
    {
        this.accountBalance -= amount;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    },
    // STRETCH GOAL: Add Interest (1%)
    addInterest: function() {
        var tempInterestRate = this.interestRate;
        
        // if multipleAccounts is true, increase interest rate by 0.5% .
        if (this.multipleAccounts) {
            tempInterestRate += 0.005;
        }

        this.accountBalance *= tempInterestRate;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    }
};

//5. Create the required output to complete steps 6-10 of the lab.

// 6. Output the account starting balance to the console.
console.log("Starting balance: $" + bankCustomer.accountBalance.toFixed(2));

// 7. Deposit $200
console.log(bankCustomer.makeDeposit(200));

// 8. Output the new balance to the console.
console.log("New balance after deposit: $" + bankCustomer.accountBalance.toFixed(2));

// 9. Withdraw $75
console.log(bankCustomer.makeWithdrawal(75));

// 10. Output the new balance to the console.
console.log("New balance after withdrawal: $" + bankCustomer.accountBalance.toFixed(2));



//6. Once everything is working, tackle the Stretch Goal!
// STRETCH GOAL: Add Interest (1%)
bankCustomer.multipleAccounts = true;  // Set this to true to apply 0.5% bonus interest
console.log(bankCustomer.addInterest());  // Output after adding interest

    