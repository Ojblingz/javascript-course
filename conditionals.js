"use strict";

// 1: Grade calculator

const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 2: Age check

const age = 17;

if (age >= 18) {
    console.log("You can vote and drive");
} else if (age >=16) {
        console.log("You can vote but cannot drive");
} else {
    console.log("You cannot vote or drive");
}

// 3: Leap year

const year = 2027;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " Is a leap year.");
} else {
    console.log(year + " Is not a leap year")
}

