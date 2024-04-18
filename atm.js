#! /usr/bin/env node
import inquirer from "inquirer";
//78692
//creating or initializing variable for amount in dollars
let myBalance = 10000;
let myPin = 1234;
console.log("Welcome to latest ATM-Machine by Naila!");
// creating var with object to ask data from user
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin code is correct.Login successfully!");
    // console.log(`Your Current Account Balance is ${myBalance}`)
    //console.log("Enter correct pin code!!!")
    //creating varaible to perform any account operation
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to be witdraw:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("you have Insufficient Balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdrawn Suceesfully`);
            console.log(`Your remaining balance is${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your account balance is ${myBalance}.`);
    }
}
else {
    console.log("Your Pin Code is Incorrect.Try again!");
}
