(function() {
"use strict";

$(document).ready(function() {

    function joke() {
        $.ajax('https://api.icndb.com/jokes/random').done(function (resp) {
            $('#joke-quote-display').html(resp.value.joke);
        });
    }

    function quote() {
        $.ajax('http://quotes.stormconsultancy.co.uk/random.json').done(function (resp) {
            $('#joke-quote-display').html('"' + resp.quote + '"' + " -" + resp.author);
        });
    }

    $('#left-btn-joke').click(function () {
        joke();
    });

    $('#right-btn-quote').click(function () {
        quote();
    });

});
})();

