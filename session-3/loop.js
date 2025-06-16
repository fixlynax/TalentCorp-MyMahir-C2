// While loop
x = 0;
while (x <= 5) {
    console.log("x is currently", x);
    x = x + 2; // Increment x by 2
}

// Separator
console.log("========================");

// Prompt-based while loop (commented out for safety)
/// let userNumber = prompt("Type a number");
/// counter = 0;
/// while (counter < userNumber) {
///     console.log("counter is currently", counter);
///     counter = counter + 2; // Increment by 2
///     counter += 2;          // Another way to increment by 2
///     counter++;             // Only increments by 1
/// }

// For loop
for (let i = 0; i <= 7; i++) {
    console.log("i is currently", i);
}

// Do-while loop (runs at least once even if the condition is false)
let y = 0;
do {
    console.log("y is currently", y);
    y++;
} while (y < 4);
