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

})();