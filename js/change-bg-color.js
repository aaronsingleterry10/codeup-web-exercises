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

    document.getElementById("change-bg-color").addEventListener("click", function(e) {
        let randomNumber = Math.floor(Math.random() * ((colorsArray.length - 1) - 0 + 1));

        document.getElementsByTagName("body")[0].style.backgroundColor = `${colorsArray[randomNumber]}`;
        document.getElementById("change-bg-color").style.backgroundColor = `${colorsArray[randomNumber]}`;
    });

})();