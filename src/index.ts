//type definition.
type Employee = {
  fullName: [string, string];
  age: number;
  department: string;
  skills: string[];
  isActive: boolean;
};

// Create employee objects
const employee1: Employee = {
  fullName: ["Orinea", "Tovhakale"],
  age: 22,
  department: "Engineering",
  skills: ["JavaScript", "Python", "C++"],
  isActive: true
};

const employee2: Employee = {
  fullName: ["Jaydine", "Alexander"],
  age: 21,
  department: "Information Technology",
  skills: ["SEO", "Business analysis", "Software testing"],
  isActive: false
};

// Function to log employee details
function logEmployee(employee: Employee): void {
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