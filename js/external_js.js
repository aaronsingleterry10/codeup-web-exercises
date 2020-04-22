"use strict";

(function () {



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

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var moviePricePerDay = 3;
var daysRentedBrotherBear = parseInt(prompt('How many days have you rented Brother Bear?'));
var daysRentedLittleMermaid = parseInt(prompt('How many days have you rented the Little Mermaid?'));
var daysRentedHercules = parseInt(prompt('How many days have you rented Hercules?'));

var movieRentalTotal = (daysRentedBrotherBear * moviePricePerDay) + (daysRentedHercules * moviePricePerDay) + (daysRentedLittleMermaid * moviePricePerDay);

alert('Your movie rental total is: $' + movieRentalTotal.toFixed(2));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleDollarsPerHour = 400;
var amazonDollarsPerHour = 380;
var facebookDollarsPerHour = 350;

var googleHoursWorked = parseInt(prompt('How many hours did you work at Google?'));
var amazonHoursWorked = parseInt(prompt('How many hours did you work at Amazon?'));
var facebookHoursWorked = parseInt(prompt('How many hours did you work at Facebook?'));
//
var totalPayment = (googleDollarsPerHour * googleHoursWorked) + (amazonDollarsPerHour * amazonHoursWorked) + (facebookDollarsPerHour * facebookHoursWorked);

alert('Your total payment is: $' + totalPayment.toFixed(2));

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var isClassFull = confirm('Is the class full?');
var doesScheduleConflict = confirm('Does it conflict with your schedule?');

var canEnroll = isClassFull && doesScheduleConflict
alert('It is ' + canEnroll + ' that you can enroll');

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var moreThanTwoItems = confirm('Are you buying more than two items?');
var isPremiumMember = confirm('Are you a premium member?');
var hasOfferExpired = confirm('Is the offer not expired?');

var productOffer = (moreThanTwoItems || isPremiumMember) && hasOfferExpired;
alert('It is ' + productOffer + ' that you can use this offer');

})();