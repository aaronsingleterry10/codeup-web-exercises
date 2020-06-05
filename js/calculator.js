"use strict";
$(document).ready(function () {
    // Assigns functions to buttons
    $('#clear').click(function () {
        array = [];
        $('#first-num, #operator, #second-num').val('');

    });

    var array = [];

    $('#one').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(1);
            array = joinArr(array);
            $('#second-num').val(array);
        } else if ($('#operator').val().length <= 0) {
            array.push(1);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });

    $('#two').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(2);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(2);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#three').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(3);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(3);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#four').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(4);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(4);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#five').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(5);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(5);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#six').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(6);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(6);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#seven').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(7);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(7);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#eight').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(8);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(8);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#nine').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(9);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(9);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#zero').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0) {
            array.push(0);
            array = joinArr(array);
            $('#second-num').val(array);
        } else {
            array.push(0);
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });
    $('#plus').click(function () {
        array = [];
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);
    });
    $('#minus').click(function () {
        array = [];
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);
    });
    $('#multiply').click(function () {
        array = [];
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);
    });
    $('#division').click(function () {
        array = [];
        var text = $(this).text();
        $('#operator').html('');
        $('#operator').val(text);
    });
    $('#dot').click(function (e) {
        e.preventDefault();
        if ($('#operator').val().length > 0 && findDecimal(array) < 0) {
            array.push('.');
            array = joinArr(array);
            $('#second-num').val(array);
        } else if ($('#operator').val().length <= 0 && findDecimal(array) < 0) {
            array.push('.');
            array = joinArr(array);
            $('#first-num').val(array);
        }
    });

    // This executes the math utilizing the math functions
    $('#equals').click(function () {
        if ($('#operator').val() === '+') {
            $('#first-num').val(addition($('#first-num').val(), $('#second-num').val()));
            $('#second-num').val('');
        } else if ($('#operator').val() === '-') {
            $('#first-num').val(subtraction($('#first-num').val(), $('#second-num').val()));
            $('#second-num').val('');
        } else if ($('#operator').val() === 'x') {
            $('#first-num').val(multiplication($('#first-num').val(), $('#second-num').val()));
            $('#second-num').val('');
        } else {
            $('#first-num').val(division($('#first-num').val(), $('#second-num').val()));
            $('#second-num').val('');

        }
        console.log($('#first-num').val());
        array = [];
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

    var list = ["123."];

    function joinArr(arr) {
        arr = arr.join('');
        arr = arr.split(' ');
        return arr;
    }

    function findDecimal(arr) {
        arr = arr.join(',');
        arr = arr.split('');
        return arr.indexOf('.');
    }

    console.log(findDecimal(list));
    // console.log(joinArr(list));
    // console.log($('#first-num').val());
    // console.log($('#second-num').val());
});