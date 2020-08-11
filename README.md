# OOP-employee-summary
Homework 10

In this homework assignment, I built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. 
I built a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

For this assignement I used NPM init, Yarn Install and Inquirer to prompt the user for their email, id, and specific information based on their role with the company. The dependencies are Jest for testing.

The first class is an `Employee`. The second is `Manager`. The third is `Intern`. Each class prompts the same questions of Name, ID, email. 

The first class is an `Employee` will ask:
  * name
  * id
  * email


The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 




