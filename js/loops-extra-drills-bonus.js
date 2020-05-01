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
    function subtractFromTo(from, to, subtract) {
        var output = '';
        var i = from;
        while (i >= to) {
            output += i + '\n';
            i = i - subtract;
        }
        return output;
    }

    console.log(subtractFromTo(10, -2, 2), 'while loop');

    //===Do While Loop===
    function subtractDoWhileLoop(from, to, subtract) {
        var output = '';
        var i = from;
        do {
            output += i + '\n';
            i = i - subtract;
        } while (i >= to)
        return output;
    }

    console.log(subtractDoWhileLoop(10, -2, 2), 'do while loop');

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
//     ===While Loop===
    function numTimesItself(from, to, num) {
        var output = '';
        while (from < to) {
            output += num + '\n';
            num = num * num;
            from++;
        }
        return output;
    }
    console.log(numTimesItself(0, 5, 2), 'while loop');

   // ===Do While===
    function doWhileNumTimesItself(from, to, num) {
        var output = '';
        do {
            output += num + '\n';
            num = num * num;
            from++;
        } while (from < to)
        return output;
    }

    console.log(doWhileNumTimesItself(0, 5, 2), 'do while loop');

    //===For Loop===
    function forLoopTimesItself(from, to, num) {
        var output = '';
        for (var i = from; i < to; i++) {
            output += num + '\n';
            num = num * num;
        }
        return output;
    }

    console.log(forLoopTimesItself(0, 5, 2), 'for loop');
// ---------------
// 1
// 2
// 3
// 4
// 5
// 6
    //===While Loop===
    function countToNum(num) {
        var output = '';
        var i = 1;
        while (i <= num) {
            output = output + i + '\n';
            i++;
        }
        return output;
    }

    console.log(countToNum(6));

    //===Do While Loop===
    function doWhileCountToNum(num) {
        var output = '';
        var i = 1;
        do {
            output = output + i + '\n';
            i++;
        } while (i <= num)
        return output;
    }

    console.log(doWhileCountToNum(6));

    //===For Loop===
    for (var i = 1; i <= 6; i++) {
        console.log(i);
    }
        // refactored
    function forLoopCountToNum(num) {
        var output = '';
        for (var i = 1; i <= num; i++) {
            output = output + i + '\n';
        }
        return output;
    }

    console.log(forLoopCountToNum(6));
// ---------------
// 105
// 100
// 95
    //===While Loop===
    console.log(subtractFromTo(105, 95, 5), 'while loop function');
    //===Do While Loop===
    console.log(subtractDoWhileLoop(105, 95, 5), 'do while loop function');
    //===For Loop===
    console.log(forLoopFromTo(105, 95, 5), 'for loop function');
// ---------------
// 1000000
// 100000
// 10000
// 1000
// 100
// 10
// 1
})();