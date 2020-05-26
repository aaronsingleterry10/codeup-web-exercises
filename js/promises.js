"use strict";
(function () {

    // let myToken = fetch("https://api.github.com/users/aaronsingleterry10",{header: {
    //         'Authorization': `token ${gitHubKey}`
    //     }});
    // myToken.then(response => console.log(response));
    // fetch("https://api.github.com/users/aaronsingleterry10/events", {
    //     header: {
    //         'Authorization': `token ${gitHubKey}`
    //     }
    // }).then(response => response.json())
    //     .then(eventDate => eventDate[0].created_at)
    //     .then(date => new Date(date).toDateString())

    let lastEvent = (userName, accessToken) => {

       return fetch(`https://api.github.com/users/${userName}/events`, {
            header: {
                'Authorization': `token ${accessToken}`
            }
        }).then(response => response.json()).then(eventDate => eventDate[0].created_at).then(date => new Date(date).toDateString()
        );

    }

    lastEvent('aaronsingleterry10', gitHubKey).then(console.log);

    let wait = num => {
        num = num * 1000;
        return new Promise((resolve) => setTimeout(() => {
            if (num > 1000) {
                resolve("You'll see this after " + (num / 1000) + " seconds");
            } else {
                resolve("You'll see this after " + (num / 1000) + " second");
            }
        }, num));
    }
    wait(1).then(console.log)
    wait(2).then(console.log)
    wait(3).then(console.log)

    // console.log(wait(1).then(() => console.log("You'll see this in 1 second")));
    // console.log(wait(3).then(() => console.log("You'll see this in 3 seconds")));

    // const wait = new Promise(num => {
    //     num = num * 1000;
    //     setTimeout(() => {
    //         if (num > 1000) {
    //             return "You'll see this after " + (num / 1000) + " seconds";
    //         } else {
    //             return "You'll see this after " + (num / 1000) + " second";
    //         }
    //     }, num);
    // });


})();