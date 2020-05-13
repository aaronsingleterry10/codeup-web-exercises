"use strict";
(function() {
    $(document).ready(function() {

        // alert($('#main-paragraph').html());
        // alert($('#main-heading').html());
        // $('.codeup').css('border', '1px solid red');
        // $('li').css({
        //     'font-size': '20px',
        //     'background-color': 'red'
        // });
        // $('h1').css('background-color', 'yellow');
        // $('p').css('background-color', 'green');
        // $('h1, p, li').css('background-color', 'yellow');

        // === jQuery Mouse Events Exercise ===

        $('h1').click(function() {
            $(this).css("background-color", "green");
        });
        $('p').dblclick(function() {
            $(this).css("font-size", "18px");
        });

        $('li').hover(function() {
            $(this).css("color", "red");
        }, function() {
            $(this).css("color", "black");
        });


    });
})();