#! /usr/bin/env node
// Word Counter
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
// Welcome Animation
async function welcome() {
    let title = chalkAnimation.rainbow('- Word Counter -', 2);
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
}
;
await welcome();
// User input through inquirer
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Write your sentence/paragrapgh to find out the number of words and letters:"
    }
]);
// Destructuring object
const paragrapgh = answers.userInput;
// Function which will count 
function countCharactersAndWords(paragraph) {
    // Counting characters
    const charCount = paragraph.replace(/\s/g, '').length;
    // Counting words
    const words = paragraph.trim().split(/\s+/);
    const wordCount = words.length;
    console.log(chalk.magenta(`Word count: ${wordCount}`));
    console.log(chalk.magenta(`Character count (excluding whitespaces): ${charCount}`));
}
;
countCharactersAndWords(paragrapgh);
