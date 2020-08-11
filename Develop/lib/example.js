const inquirer = require('inquirer');

class Question {
    constructor(message, type, name) {
        this.type = type;
        this.name = name;
        this.message = message;
    }

    validate(input){
        if(input.length < 1){
            return "please type more!"
        } else {
            return true;
        }
    }
}



const simpleInput = new Question("what is simple?", "input", "simple");
console.log(simpleInput);

class CheckBoxInput extends Question {
    constructor(message, type, name, choices) {
        super(message, type, name);
        this.choices = choices;
    }
};

const simpleCheckbox = new CheckBoxInput("what do you want?", "checkbox", "check", ["computer", "knowledge", "server"]);

inquirer.prompt([simpleInput, simpleCheckbox])
.then(answers => {console.log(answers)});
