// 1: Basic Math Operations

const a = 30;
const b = 10;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);

// 2. Check if a number is even or odd

const number = 19;

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

// 3. Shopping bill

const item1 = 2000;
const item2 = 3000;
const item3 = 1500;

const subtotal = item1 + item2 + item3;
const tax = subtotal * 0.075;
const total = subtotal + tax;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total.toFixed(2));
    