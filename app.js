import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green.bold("Calculator is ready to perform operations."));
console.log("");
let add = (a, b) => {
    return a + b;
};
let subtract = (a, b) => {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
let divide = (a, b) => {
    return a / b;
};
const operation = ['add', 'subtract', 'multiply', 'divide'];
const doCalculations = async () => {
    let operationChoice = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: chalk.blue.bgWhite.bold("Select an Operation"),
            choices: operation
        },
    ]);
    const num1 = parseInt((await inquirer.prompt([
        {
            name: "value",
            type: "number",
            message: "Enter your First number here",
            validate: (input) => {
                if (input === "") {
                    return "Input cannot be empty";
                }
                if (!isFinite(input)) {
                    return "Invalid input: Enter a valid positive or negative number (decimal allowed)";
                }
                return true; // Input is valid
            },
        }
    ])).value, 10); // taking num inquirer from user and  
    //pass it to parseint ot make sur th base 10 
    const num2 = parseInt((await inquirer.prompt([
        {
            name: "value",
            type: "number",
            message: "Enter your First number here"
        },
    ])).value, 10); // taking num2 inquirer from user and  
    //pass it to parseint ot make sur th base 10 
    let result;
    switch (operationChoice.operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            console.log("invalid operation");
            return;
    }
    console.log(`the result is ${result}`);
};
doCalculations();
