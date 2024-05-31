#! /usr/bin/env node


import inquirer  from "inquirer";
import chalk from "chalk";

const systemGenerateNo  = Math.floor(Math.random() * 10) + 1;

const {userGuess} : {userGuess:number} = await inquirer.prompt({
    type : "number", 
    name : "userGuess",
    message :chalk.bgRed( "Guess the number between 1 to 10:"),
});

if(userGuess === systemGenerateNo){
    console.log(chalk.green("Congratulations your guess is right."));

}else{
    console.log(chalk.red(`Opps the correct number was ${systemGenerateNo}. Better Luck Next Time. `));
}