console.log("Hello from external JavaScript!!!");

alert("Welcome to my website!!");

var favColor = prompt("What is your favorite color?");

alert("Great, " + favColor + " is my favorite color too!!");

// Rentals

var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var dollarsPerDay = 3;

var sumOfRentals = ((littleMermaid * dollarsPerDay) + (brotherBear * dollarsPerDay) + (hercules * dollarsPerDay));

// Life as a contractor;

var googleDollarsPerHour = 400;
var amazonDollarsPerHour = 380;
var facebookDollarsPerHour = 350

var totalPaycheck = ((googleDollarsPerHour * 4) + (amazonDollarsPerHour * 4) + (facebookDollarsPerHour * 10));

prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");

alert("The answer is: " + sumOfRentals);

prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");

alert("The answer is: " + "$" + totalPaycheck);

prompt("A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.");




prompt("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.");