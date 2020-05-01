"use strict";

(function() {

// For each of the following outputs, create a while loop, do-while loop, and for loop to duplicate the output...
// ---------------
// 10
// 8
// 6
// 4
// 2
// 0
// -2
    //===While Loop===
    function whileLoop(from, to, subtract) {
        var output = '';
        var i = from;
        while (i >= to) {
            output += i + '\n';
            i = i - subtract;
        }
        return output;
    }

    console.log(whileLoop(10, -2, 2), 'while loop');

    //===Do While Loop===
    function doWhileLoop(from, to, subtract) {
        var output = '';
        var i = from;
        do {
            output += i + '\n';
            i = i - subtract;
        } while (i >= to)
        return output;
    }

    console.log(doWhileLoop(10, -2, 2), 'do while loop');

    //===For Loop===

    function forLoopFromTo(from, to, subtract) {
        var output = '';
        for (var i = from; i >= to; i = i - subtract) {
            output += i + '\n';
        }
        return output;
    }
    console.log(forLoopFromTo(10, -2, 2), 'for loop');

// ---------------
// 2
// 4
// 16
// 256
// 65536
// ---------------
// 1
// 2
// 3
// 4
// 5
// 6
// ---------------
// 105
// 100
// 95
// ---------------
// 1000000
// 100000
// 10000
// 1000
// 100
// 10
// 1
})();