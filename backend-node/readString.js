const fs = require('fs');

const readStream = fs.createReadStream('./lib/colors2.json', 'UTF-8');

console.log(" what are you thinking.. ");
/*
process.stdin.on('data', data => {
    console.log(`I read ${data.length - 1} characters`);
});*/

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
   console.log('finished');
});

