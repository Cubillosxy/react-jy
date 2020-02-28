const cp = require('child_process');

/*
const cp_1 = cp.exec('ls -lh', (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);
}); */

const questionApp = cp.spawn('node', ['index.js']);

questionApp.stdin.write('Alex \n');
questionApp.stdin.write('Tahoe \n');
questionApp.stdin.write('Change the world \n');

questionApp.stdout.on('data', data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on('close', () => {
    console.log(`questionApp process exited`);
});