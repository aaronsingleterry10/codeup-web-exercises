"use strict";
(function() {



var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].age += 1;
    }
    return obj;
}

console.log(getOlder(dogs));

})();