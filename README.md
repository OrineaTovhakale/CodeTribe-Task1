# CodeTribe Task 1: Employee Data Management

Overview

This project is a TypeScript implementation for the CodeTribe Task 1 assignment, focusing on employee data management. It defines a custom Employee type, creates employee objects, and includes a function to log employee details in a formatted manner to the console. The project demonstrates proficiency in TypeScript type definitions, object creation, and function implementation.

Project Structure

The project is organized as follows:



src/index.ts: Contains the main TypeScript code, including the Employee type definition, employee objects, and the logEmployee function.



package.json: Specifies project dependencies and scripts for TypeScript compilation.



tsconfig.json: Configures TypeScript compiler options.



.gitignore: Excludes node_modules and dist from version control.



dist/: (Ignored) Contains compiled JavaScript files (not tracked in Git).



node_modules/: (Ignored) Contains project dependencies.

Features





Custom Type: Defines an Employee type with properties:





fullName: A tuple of [firstName: string, lastName: string].



age: A number representing the employee’s age.



department: A string indicating the employee’s department.



skills: An array of strings listing the employee’s skills.



isActive: A boolean indicating employment status.



Employee Objects: Creates at least two employee objects with sample data.



Logging Function: Implements logEmployee(), which formats and logs employee details to the console.



Output Format: Matches the specified format:

--- Employee Details ---
Name: John Doe
Age: 30
Department: Engineering
Skills: JavaScript, Python, C++
Active: Yes
------------------------

Installation and Setup

To run this project locally, follow these steps:


Clone the Repository:


git clone https://github.com/OrineaTovhakale/CodeTribe-Task1.git
cd CodeTribe-Task1

Install Dependencies: Ensure Node.js is installed, then run:
npm install


Compile TypeScript: Compile src/index.ts to JavaScript:
npx tsc


Run the Project: Execute the compiled JavaScript:
node dist/index.js


