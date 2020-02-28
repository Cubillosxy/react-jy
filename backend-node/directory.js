const fs = require('fs');

//fs.renameSync('./storage-f', './storage-f2');

// remove all the files in the directory
fs.readdirSync('./storage-f').forEach(fileName => {
    fs.unlinkSync(`./storage-f/${fileName}`);
});

fs.rmdir('./storage-f', err => {
   if (err) {
       throw err;
   }
   console.log('directory delete');
});