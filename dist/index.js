"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create employee objects
const employee1 = {
    fullName: ["Orinea", "Tovhakale"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true
};
const employee2 = {
    fullName: ["Jaydine", "Alexander"],
    age: 25,
    department: "Information Technology",
    skills: ["SEO", "Business analysis", "Software testing"],
    isActive: false
};
// Function to log employee details
function logEmployee(employee) {
    console.log("--- Employee Details ---");
    console.log(`Name: ${employee.fullName[0]} ${employee.fullName[1]}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Skills: ${employee.skills.join(", ")}`);
    console.log(`Active: ${employee.isActive ? "Yes" : "No"}`);
    console.log("------------------------");
}
// Call the function for each employee
logEmployee(employee1);
logEmployee(employee2);
//# sourceMappingURL=index.js.map