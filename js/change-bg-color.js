"use strict";

(function() {

    let colorsArray = [
        "lightcoral",
        "hotpink",
        "orange",
        "yellow",
        "fuchsia",
        "purple",
        "limegreen",
        "darkgreen",
        "teal",
        "olive",
        "steelblue"
    ];

    let randomNumber = Math.floor(Math.random() * ((colorsArray.length - 1) - 0 + 1));
    console.log(randomNumber);


})();