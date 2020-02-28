const fs = require('fs');
const colorData = require('./lib/colors.json');

//const files = fs.readdirSync('./lib');
//const text = fs.readFileSync('./../LICENSE', 'UTF-8');

fs.readFile('./../LICENSE', 'UTF-8', (err, text) => {
    if (err) {
        console.log('Error' + err);
        process.exit();
    }
    //console.log('file contents read');
    //console.log(text);
});

fs.readdir("./lib", (err, files) => {
    if (err) {
        throw err;
    }
    //console.log('read complete');
    //console.log(files);
});

//console.log("stating reading");
// console.log(text);

// writing a file

const md = `
# This is a new file

We can write text to a file with fs

*fs.readdir
*fs.readFile
*fs.writeFile

`;

/*
fs.writeFile('./lib/notes.md', md.trim(), err => {
    if (err) {
        throw err
    }
    console.log('file saved ok');
});

*/

// make dir

if (fs.existsSync('storage-files')) {
    console.log('this directory already exists');
} else {
    fs.mkdir('storage-files', err => {
    if (err) {
        throw err;
    }
    console.log('directory created');
});
}

// read json
const append = colorData.colorList.forEach(c => {
   fs.appendFile('./storage-files/colors.md', `${c.color}: ${c.hex} \n`, err => {
       if (err) {
           throw err;
       }
       console.log('color pushed');
   })
});


fs.renameSync('./lib/colors.json', './lib/colors2.json');

fs.rename('./lib/notes.md', './storage-files/notes.md', err => {
    if (err) {
        throw err
    }
});

// DELETE
setTimeout(()=> {
    fs.unlinkSync('./storage-files/fordele.json');
}, 1000);