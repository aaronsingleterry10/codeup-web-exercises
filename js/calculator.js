"use strict";
$(document).ready(function () {

    // Assigns functions to buttons
    $('#clear').click(function () {
        $('#first-num, #operator, #second-num').html('');
    });
    $('#one').click(function () {
        var text = $(this).text();
        console.log(text);
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#two').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('2');
        } else {
            $('#first-num').append('2');
        }
    });
    $('#three').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('3');
        } else {
            $('#first-num').append('3');
        }
    });
    $('#four').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('4');
        } else {
            $('#first-num').append('4');
        }
    });
    $('#five').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('5');
        } else {
            $('#first-num').append('5');
        }
    });
    $('#six').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('6');
        } else {
            $('#first-num').append('6');
        }
    });
    $('#seven').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('7');
        } else {
            $('#first-num').append('7');
        }
    });
    $('#eight').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('8');
        } else {
            $('#first-num').append('8');
        }
    });
    $('#nine').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('9');
        } else {
            $('#first-num').append('9');
        }
    });
    $('#zero').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('0');
        } else {
            $('#first-num').append('0');
        }
    });
    $('#plus').click(function () {
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val('+');
    });
    $('#minus').click(function () {
        $('#operator').html('');
        $('#operator').html('-');
    });
    $('#multiply').click(function () {
        $('#operator').html('');
        $('#operator').html('x');
    });
    $('#division').click(function () {
        $('#operator').html('');
        $('#operator').html('/');
    });

    // This executes the math utilizing the math functions
    $('#equals').click(function () {
        if ($('#operator').text() === '+') {
            $('#first-num').text(addition($('#first-num').text(), $('#second-num').text()) + '');
            $('#second-num').html('');
        } else if ($('#operator').text() === '-') {
            $('#first-num').text(subtraction($('#first-num').text(), $('#second-num').text()) + '');
            $('#second-num').html('');
        } else if ($('#operator').text() === 'x') {
            $('#first-num').text(multiplication($('#first-num').text(), $('#second-num').text()) + '');
            $('#second-num').html('');
        } else {
            $('#first-num').text(division($('#first-num').text(), $('#second-num').text()) + '');
            $('#second-num').html('');

        }
    });

    // These functions do the math and parsing logic
    function addition(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    function subtraction(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }

    function multiplication(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }

    function division(num1, num2) {
        return parseFloat(num1) / parseFloat(num2);
    }
});