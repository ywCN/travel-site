// create a file with image
const fs = require('fs');
const http = require('http');

fs.writeFile(__dirname + "/index.html", "<h1>hi</h1>", error => {
    if (error) {
        return console.log(error);
    } else {
        return console.log('succeed!');
    }
});

const photoLocation = 'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg';
http.get(photoLocation, response => {
    response.pipe(fs.createWriteStream(__dirname + '/mydog.jpg'));
});