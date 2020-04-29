"use strict";

(function () {

    function showMultiplicationTable(num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + ' x ' + i + ' = ' + (num * i));
        }
    }

    showMultiplicationTable(7);

    for (var i = 1; i <= 10; i++) {

        var randomNumber = Math.floor((Math.random() * 200 - 20 + 1) + 20);

        if (randomNumber % 2 === 0) {
            console.log(randomNumber + ' is even');
        } else {
            console.log(randomNumber + ' is odd');
        }
    }

    for (var x = 1; x <= 9; x++) {
         console.log(x.toString().repeat(x));
    }


    for (var num = 100; num >= 5; num = num - 5) {
        console.log(num);
    }

})();