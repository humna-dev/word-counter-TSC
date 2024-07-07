#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgGreen.bold.italic.underline("\n\t Greetings! Welcome to HUMNA_ALLAUDDIN's Amazing Word Counter!\n\t"));

let quation = await inquirer.prompt([{
    type: "confirm",
    name: "yes$no",
    message: "Do you want to count the length of your sentence?",
    default: true
}]);

if (quation.yes$no == true) {
    console.log(chalk.bgBlue.bold("\n\t Sure, let's do it!\n\t"));

    let user_ans = await inquirer.prompt([{
        type: "input",
        name: "words",
        message: "Please enter your sentence:"
    }]);

    console.log("\n\t", chalk.bgCyan.bold(user_ans.words) + "\n\t");

    if (user_ans.words.trim() !== "") {
        let answer = user_ans.words.trim().split(" ");
        console.log(answer);
        console.log(chalk.bgMagenta.bold(`\n\t Your sentence contains ${answer.length} words.\n\t`));
    }
} else {
    console.log(chalk.bgRed.bold("\n\t OK, Goodbye!\n\t"));
}
