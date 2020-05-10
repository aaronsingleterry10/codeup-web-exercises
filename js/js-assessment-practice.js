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

    function adminListCount(obj) {
        var count = 0;
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].isAdmin) {
                count += 1;
            }
        }
        return count;
    }

    console.log(adminListCount(admins), 2);

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

    function listOfAdmins(obj) {
        var list = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].isAdmin) {
                list.push(obj[i]);
            }
        }
        return list;
    }

    console.log(listOfAdmins(admins));

// Problem #5

    var breads = ["white", "wheat", "rhy", "white"];

    var fillings = [
        "pb&j",
        "ham",
        "cheese steak",
        "tuna"
    ];

    function makeSandwhichObjects(sandwichBread, sandwichFilling) {
        var output = [
            // {
            //     bread: sandwichBread[0],
            //     filling: sandwichFilling[0]
            // },
            // {
            //     bread: sandwichBread[1],
            //     filling: sandwichFilling[1]
            // },
            // {
            //     bread: sandwichBread[2],
            //     filling: sandwichFilling[2]
            // },
            // {
            //     bread: sandwichBread[3],
            //     filling: sandwichFilling[3]
            // }
        ];
        for (var i = 0; i < sandwichBread.length; i++) {
            output.push({
                bread: sandwichBread[i],
                filling: sandwichFilling[i]
            })
        }
        return output;
    }

    console.log(makeSandwhichObjects(breads, fillings));

})();