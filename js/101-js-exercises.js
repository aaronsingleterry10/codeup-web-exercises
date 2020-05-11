"use strict";

(function () {

    //  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
    var onMarsRightNow = false;

    // Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
    var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

    //  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini
    var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];

    // Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
    fruits.push("tomato");
    console.log(fruits);
    // Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
    vegetables.push("tomato");
    console.log(vegetables);

    // Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
    numbers.reverse();
    console.log(numbers);

    // Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
    vegetables.sort();
    console.log(vegetables);

    // Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
    fruits.sort();
    fruits.reverse();
    console.log(fruits);

    // Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
    var fruitsAndVeggies = fruits.concat(vegetables);
    console.log(fruitsAndVeggies);

    // Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
    function addOne(num) {
        return num + 1;
    }

    console.log(addOne(2), 3);
    console.log(addOne(5), 6);
    console.log(addOne(10), 11);

    // Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
    function isPositive(num) {
        return num > 0;
    }

    console.log(isPositive(3), true);
    console.log(isPositive(-2), false);

    // Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
    function isNegative(num) {
        return num < 0;
    }

    console.log(isNegative(-4), true);
    console.log(isNegative(3), false);

    // Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
    function isOdd(num) {
        return num % 2 !== 0;
    }

    console.log(isOdd(3), true);
    console.log(isOdd(24), false);

    // Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
    function isEven(num) {
        return !isOdd(num);
    }

    console.log(isEven(4), true);
    console.log(isEven(3), false);

    // Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
    function identity(input) {
        return input;
    }

    // Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
    function isPositiveOdd(num) {
        return isPositive(num) && isOdd(num);
    }

    console.log(isPositiveOdd(4), false);
    console.log(isPositiveOdd(3), true);
    console.log(isPositiveOdd(-3), false);
    console.log(isPositiveOdd(7), true);

    // Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
    function isPositiveEven(num) {
        return isPositive(num) && isEven(num);
    }

    console.log(isPositiveEven(44), true);
    console.log(isPositiveEven(33), false);
    console.log(isPositiveEven(-2), false);

    // Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
    function isNegativeOdd(num) {
        return isNegative(num) && isOdd(num);
    }

    var array = ['tomato', 'apple', 'banana', 'tomato', 'orange', 'apple'];
    function getUniqueValues(arr) {

        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
                arr.splice(arr.lastIndexOf(arr[i]));
            } else {
                newArr.push[arr[i]];
            }
        }
        return newArr;
    }

    console.log(getUniqueValues(array));


})();