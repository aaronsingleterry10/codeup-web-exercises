(function() {
"use strict";

$(document).ready(function() {

    $.ajax('https://api.icndb.com/jokes/random').done(function(resp) {

        $('#left-btn-joke').click(function() {
            // console.log(resp.value.joke);
           $('#joke-quote-display').html(resp.value.joke);
        });
    });

});
})();

