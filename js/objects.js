(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        var person = {
            firstName: "Rick",
            lastName: "Sanchez"
        }
        console.log(person.firstName);
        console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        person.sayHello = function() {
            return 'Hello from ' + person.firstName + ' ' + person.lastName + '!';
        }
        console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log("For Loop");
    function hebShoppers(coupon, obj) {
        var output = '';
        for (var i = 0; i < obj.length; i++) {
            if (totalAmountOverTwoHundred(obj[i].amount)) {
                output = output + obj[i].name + ", " + "You're total amount is: $" + obj[i].amount.toFixed(2) + ". " + "You're discount is: $" + (discount(coupon) * obj[i].amount).toFixed(2) + ". " + "You're total amount after the discount is: $" + (obj[i].amount - (obj[i].amount * discount(coupon))).toFixed(2) + "\n";
            } else {
                output = output + obj[i].name + ", " + "You're total amount is: $" + obj[i].amount.toFixed(2) + ". " + "You're purchase is not eligible for discount." + "\n";
            }
        }
        return output;
    }

    console.log(hebShoppers(12, shoppers));

    function totalAmountOverTwoHundred(num) {
        return num > 200;
    }
    function discount(num) {
        return num / 100;
    }

    console.log("ForEach Loop");

    function hebShoppersforEach(coupon, obj) {
        var output = "";
        obj.forEach(function(element, i) {
            if (totalAmountOverTwoHundred(element.amount)) {
                output += element.name + ", " + "You're total amount is: $" + element.amount.toFixed(2) + ". " + "You're discount is: $" + (discount(coupon) * element.amount).toFixed(2) + ". " + "You're total amount after the discount is: $" + (element.amount - (element.amount * discount(coupon))).toFixed(2) + "\n";
            } else {
                output += element.name + ", " + "You're total amount is: $" + element.amount.toFixed(2) + ". " + "You're purchase is not eligible for discount." + "\n";
            }
        });
        return output;
    }

    console.log(hebShoppersforEach(12, shoppers));

    // console.log(totalAmountOverTwoHundred(200));
    // console.log(discount(12));


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {
    //         title: "Harry Potter and the Half-Blood Prince",
    //         author: {
    //             firstName: "J. K.",
    //             lastName: "Rowling"
    //         }
    //     }, {
    //         title: "Pride and Prejudice",
    //         author: {
    //             firstName: "Jane",
    //             lastName: "Austen"
    //         }
    //     }, {
    //         title: "To Kill a Mockingbird",
    //         author: {
    //             firstName: "Harper",
    //             lastName: "Lee"
    //         }
    //     }, {
    //         title: "The Hunger Games",
    //         author: {
    //             firstName: "Suzanne",
    //             lastName: "Collins"
    //         }
    //     }, {
    //         title: "1984",
    //         author: {
    //             firstName: "George",
    //             lastName: "Orwell"
    //         }
    //     }
    // ];
    var books = [
        createBook("Harry Potter and the Half-Blood Prince", "J. K.", "Rowling"),
        createBook("Pride and Prejudice", "Jane", "Austen"),
        createBook("To Kill a Mockingbird", "Harper", "Lee"),
        createBook("The Hunger Games", "Suzanne", "Collins"),
        createBook("1984", "George", "Orwell")
        ];
    console.log(books);
    console.log(books[2].title, "to kill...");
    console.log(books[1].author.firstName, "jane");
    console.log(books[4].author.lastName, "orwell");

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function bookInfo(obj) {
        var bookOutput = "";

        obj.forEach(function(book, i) {
            bookOutput += "Book # " + (i + 1) + "\n" + "Title: " + book.title + "\n" + "Author: " + book.author.firstName + book.author.lastName + "\n" + "---" + "\n";

        });
        return bookOutput;
    }
    console.log(bookInfo(books));
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(bookTitle, bookAuthorFirstName, bookAuthorLastName) {
        var book =
            {
                title: bookTitle,
                author: {
                    firstName: bookAuthorFirstName,
                    lastName: bookAuthorLastName
                }
            };
        return book;
    }
    console.log(createBook("Life of Pi", "Yann", "Martel"));
    console.log(createBook("Twilight", "Stephanie", "Meyer"));

    function showBookInfo(obj) {
        var bookOutput = "";
        for (var i = 0; i < obj.length; i++) {
            bookOutput += "Book # " + (i + 1) + "\n" + "Title: " + obj[i].title + "\n" + "Author: " + obj[i].author.firstName + obj[i].author.lastName + "\n" + "---" + "\n";
        }
        return bookOutput;
    }
    console.log(showBookInfo(books));

})();
