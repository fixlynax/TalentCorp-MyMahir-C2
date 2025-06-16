// Simple if-else statement
if (true) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

// Variable declaration without let/const will make it global (not recommended)
x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than 10");
}

// Simulating basic login using prompt (for learning only, not secure!)
const correctUsername = "admin";
const correctPassword = "123456";

// Prompting user input (will only work in browsers)
let username = prompt("Enter your username");
let password = prompt("Enter your password");

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}
