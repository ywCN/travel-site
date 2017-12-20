// create a file
const fs = require('fs');
fs.writeFile(__dirname + "/index.html", "<h1>hi</h1>", error => {
    if (error) {
        return console.log(error);
    } else {
        return console.log('succeed!');
    }
});