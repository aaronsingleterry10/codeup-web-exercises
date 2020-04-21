"use strict";

// Make a function named isOdd(number)

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(2), false);
console.log(isOdd(3), true);
console.log(isOdd(4), false);
console.log(isOdd(5), true);

// Make a function named isEven(number)

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10), true);
console.log(isEven(13), false);
console.log(isEven(6), true);
console.log(isEven(99), false);

// Make a function named identity(input) that returns the input exactly as provided.

function identity(input) {
    return input;
}

console.log(identity("hey"), "hey");
console.log(identity(4), 4);
console.log(identity("codeup"), "codeup");

//     Make a function named isFive(input)

function isFive(num) {
    return num === 5 || num === "5";
}

console.log(isFive(5), true);
console.log(isFive(6), false);
console.log(isFive("5"), true);

// Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5;
}

console.log(addFive(5));
console.log(addFive("hello"));
console.log(addFive(2));

//     Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(16), false);
console.log(isMultipleOfFive(20), true);
console.log(isMultipleOfFive(54), false);

// Make a function named isThree(input)

function isThree(input) {
    return input === 3 || input === "3";
}

console.log(isThree(3), true);
console.log(isThree("3"), true);
console.log(isThree(7), false);

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(12), true);
console.log(isMultipleOfThree(4), false);
console.log(isMultipleOfThree(18), true);

// Make a function named isMultipleOfThreeAndFive(input)



// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)