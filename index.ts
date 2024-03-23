#!usr/bin/env node



import inquirer from "inquirer";
//Asking questions fron users from inquirer
let answers=await inquirer.prompt([
    {massage:"Enter your First Number",type: "number",name:"firstNumber"},
    {massage:"Enter your Second Number",type:"number",name:"secondNumber"},

    {
    massage:"Select one operator to perform your desired operation",
    type:"list",name:"operator",choices:["Addition","Substraction","Multiplication","Division","Modulus"],
    },
]);

console.log(answers);
//conditional statements we use"if-else"
if(answers.operator==="Addition")
{
    console.log(answers.firstNumber + answers.secondNumber);
}

else if(answers.operator === "Substraction")
{
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.operator === "Multiplication")
{
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operator === "Division")
{
    console.log(answers.firstNumber / answers.secondNumber);
}
else if(answers.operator === "Modulus")
{
    console.log(answers.firstNumber % answers.secondNumber);
}
else{
    console.log("You've Enter an Invalid Operator, Try Again");
}
    

