"use strict";

(function () {

    // function showMultiplicationTable(num) {
    //     var output = ''
    //     for (var i = 1; i <= 10; i++) {
    //         output = output + num + ' x ' + i + ' = ' + (num * i) + '\n';
    //     }
    //     return output;
    // }
    //
    // console.log(showMultiplicationTable(7));

    // function isOddOrEven(num) {
    //     return (num % 2 === 0) ? num + ' is even.' : num + ' is odd';
    // }
    //
    // function randomNumberGenerator(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;;
    // }
    //
    // function isRandomNumberOddOrEven(num) {
    //     var output = '';
    //     for (var i = 1; i <= num; i++) {
    //       output += isOddOrEven(randomNumberGenerator(20, 200)) + '\n';
    //     }
    //     return output;
    // }
    //
    // console.log(isRandomNumberOddOrEven(10));

    for (var x = 1; x <= 9; x++) {
         console.log(x.toString().repeat(x));
    }

    for (var i = 1; i <= 9; i++) {
        var output = '';
        for (var j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
    }

    //
    //
    // for (var num = 100; num >= 5; num = num - 5) {
    //     console.log(num);
    // }

})();