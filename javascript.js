// 1.. Write a program to perform arithmetic operations on two numbers
// 1.. Write a program to perform arithmetic operations on two numbers
let a = 10;
let b = 5;

console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log("Modulus =", a % b);


// 2.Write a program to compare two numbers using comparison operators.
let a = 10;
let b = 5;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);


// 3.Write a program to demonstrate logical operators (&&, ||, !).
let a = 10;
let b = 5;

console.log(a > 5 && b < 10);
console.log(a > 15 || b < 10);
console.log(!(a > b));

// 4.Write a program to check whether a number is positive.
let num = 8;

if (num > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}


// 5.Write a program to check whether a number is even or odd.
let num = 7;

if (num % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 6
let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 7
let num = -5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// 8
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// 9
let a = 25;
let b = 40;

if (a > b) {
    console.log(a, "is largest");
} else if (b > a) {
    console.log(b, "is largest");
} else {
    console.log("Both numbers are equal");
}

// 10
let year = 2024;

if (year % 400 == 0) {
    console.log("Leap year");
} else if (year % 100 == 0) {
    console.log("Not a leap year");
} else if (year % 4 == 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 11
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 12
let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// 13 
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);

// 14
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 15

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        count++;
    }
}

console.log("Count =", count);



// 16

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a, "is largest");
} else if (b >= a && b >= c) {
    console.log(b, "is largest");
} else {
    console.log(c, "is largest");
}


// 17
let num = 15;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}


// 18
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact * i;
}

console.log("Factorial =", fact);


// 19
for (let i = 50; i >= 1; i--) {
    console.log(i);
}


// 20
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}

console.log("Sum of odd numbers =", sum);