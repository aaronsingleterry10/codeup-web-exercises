"use strict";

(function() {

    var i = 2;

    while (i <= 65536) {
        console.log(i);
        i = i * 2;
    }

    var allCones = Math.floor(Math.random() * 50) + 50;

    console.log(allCones);

    do {
        var conesBought = Math.floor(Math.random() * 5) + 1;
        console.log('I have ' + allCones + ' left.')
        if (allCones >= conesBought) {
            console.log(conesBought + ' cones sold');
            allCones = allCones - conesBought;
        } else {
            console.log('Cannot sell you ' + conesBought + ' cones. I only have ' + allCones + '...');
        }
        if (allCones === 0) {
            console.log('Yay! I sold them all!');
        }
    } while (allCones > 0)

})();