"use strict";

(function () {

    while (true) {
        var numberInput = prompt('Enter a number between 1 and 50');
        if (numberInput <= 50 && numberInput >= 1 && !isNaN(numberInput)) {
            break;
        } else {
            alert('That is an invalid number');
        }
    }

    console.log('Number to skip is: ' + numberInput);

    for (var i = 1; i <= 50; i++) {
        if (i % 2 === 0){
            continue;
        }
        if (parseFloat(numberInput) === i) {
             console.log('Yikes! Skipping number: ' + i);
        } else {
            console.log('Here is an odd number: ' + i);
        }
    }

})();