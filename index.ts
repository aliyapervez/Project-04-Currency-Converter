#!/usr/bin/env node


import inquirer from "inquirer";

const currency: any  ={
    USD: 1.0,  //BASE CURRENCY
    EUR: 0.92,
    GBP: 0.79,
    JPY: 169.5,
    INR: 90.88,
    CAD: 1.4,
    AUD: 1.5,
    PKR: 279,
}

 let  user_answer = await  inquirer.prompt ([
        {     
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: [ "USD", "EUR","GBP","JPY", "INR",  "CAD","AUD",  "PKR",]
        
        },
        {     
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: [ "USD", "EUR","GBP","JPY", "INR",  "CAD","AUD",  "PKR",]
        
        },
        {
            name: "amount",
            message: "Enter amount",
            type: "number",
            default: 1,
        }
    ]
 );
 
 let fromAount = currency[user_answer.from] //currency USD
 let toAmount = currency[user_answer.to]
 let amount = user_answer.amount
 let baseAmount =amount / fromAount // USD base currency
 let finalAmount = baseAmount * toAmount

 console.log(Math.round(finalAmount));
 





