process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');

// console.log(cluster.isMaster);


// is the file being executed in master mode?
if (cluster.isMaster) {
    // cause index.js to be executed *again* but in child mode
    cluster.fork();


} else {
    // im a child, im going to act like a server and do nothing else
    const express = require('express');
    const app = express()
    const crypto = require('crypto');

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
        
        }
    }
    app.get('/', (req, res) => {
        // doWork(5000);
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there');

        })
    });
    app.listen(3000);
}