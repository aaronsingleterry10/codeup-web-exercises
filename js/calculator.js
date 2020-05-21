"use strict";
$(document).ready(function () {

    // Assigns functions to buttons

    $('#clear').click(function () {
        // $('#first-num, #operator, #second-num').val('');
        console.log($('#clear'));
    });
    var text = $('#one').text();
    $('#one').click(function () {

        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else if ($('#operator').val().length <= 0) {
            $('#first-num').val(text);
            text += $('#one').text();
        }
    });
    $('#two').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#three').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val('3');
        } else {
            $('#first-num').val(text);
        }
    });
    $('#four').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#five').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#six').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#seven').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#eight').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#nine').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#zero').click(function () {
        text += $(this).text();
        if ($('#operator').val().length > 0) {
            $('#second-num').val(text);
        } else {
            $('#first-num').val(text);
        }
    });
    $('#plus').click(function () {
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);;
    });
    $('#minus').click(function () {
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);;
    });
    $('#multiply').click(function () {
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);;
    });
    $('#division').click(function () {
        var text = $(this).texval
        $('#operator').html('');
        $('#operator').val(text);;
    });

    // This executes the math utilizing the math functions
    $('#equals').click(function () {
        if ($('#operator').val() === '+') {
            $('#first-num').val(addition($('#first-num').val(), $('#second-num').val()) + '');
            $('#second-num').val('');
        } else if ($('#operator').text() === '-') {
            $('#first-num').val(subtraction($('#first-num').val(), $('#second-num').val()) + '');
            $('#second-num').val('');
        } else if ($('#operator').val() === 'x') {
            $('#first-num').val(multiplication($('#first-num').val(), $('#second-num').val()) + '');
            $('#second-num').val('');
        } else {
            $('#first-num').val(division($('#first-num').val(), $('#second-num').val()) + '');
            $('#second-num').val('');

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