"use strict";

(function () {

    // while (true) {
    //     var numberInput = prompt('Enter an odd number between 1 and 50');
    //
    //     if (numberInput <= 50 && numberInput >= 1 && numberInput % 2 !== 0 && !isNaN(numberInput)) {
    //         oddNumber();
    //         break;
    //     } else if (numberInput === '') {
    //         alert('That is an invalid number');
    //     } else if (numberInput === null) {
    //         break;
    //     } else {
    //         alert('That is an invalid number');
    //     }
    // }
    //
    // function oddNumber() {
    //
    //     console.log('Number to skip is: ' + numberInput);
    //
    //     for (var i = 1; i <= 50; i++) {
    //         if (i % 2 === 0) {
    //             continue;
    //         }
    //         if (parseFloat(numberInput) === i) {
    //             console.log('Yikes! Skipping number: ' + i);
    //         } else {
    //             console.log('Here is an odd number: ' + i);
    //         }
    //     }
    // }

    function isNumberValid(num) {
        return num <= 50 && num >= 1 && num % 2 !== 0 && !isNaN(num);
    }

    // function toSkipOrNot(num) {
    //     if (num)
    // }

    var inputPrompt = function () {
        return prompt('Enter an odd number 1 - 50.');
    }


})();