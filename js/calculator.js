"use strict";
$(document).ready(function () {

    $('#clear').click(function () {
        $('#first-num, #operator, #second-num').html('');
    });
    $('#one').click(function () {
        if ($('#operator').text().length > 0) {
            $('#second-num').append('1');
        } else {
            $('#first-num').append('1');
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
        $('#operator').html('');
        $('#operator').html('+');
        console.log($('#operator').text().length);
    });
    $('#minus').click(function() {
        $('#operator').html('');
        $('#operator').html('-');
    });
    $('#multiply').click(function() {
        $('#operator').html('');
        $('#operator').html('x');
    });
    $('#division').click(function() {
        $('#operator').html('');
        $('#operator').html('/');
    });
    function addition(num1, num2) {
        return num1 + num2;
    }
    function subtraction(num1, num2) {
        return num1 - num2;
    }
    function multiplication(num1, num2) {
        return num1 * num2;
    }
    function division(num1, num2) {
        return num1 / num2;
    }

});