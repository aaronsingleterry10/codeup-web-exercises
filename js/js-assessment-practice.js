"use strict";
(function() {


// Problem #2

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

// console.log(getOlder(dogs));

// Problem #3

    var cars = [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ];


    function washCars(obj) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].isDirty) {
                obj[i].isDirty = false;
            }
    }
        return obj;
    }

    // console.log(washCars(cars));

// Problem #4

    var admins = [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ];

    function adminList(obj) {
        var newObj = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].isAdmin) {
                newObj.push(obj[i].email);
            }
        }
        return newObj;
    }

    console.log(adminList(admins));


})();