process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork(); // Causes .js to be executed again but in child mode
} else {
    // Child, act like a server and nothing else
    const express = require('express');
    const app = express();
    const crypto = require('crypto');

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
        }
    }

    app.get('/', (req, res) => {
        //doWork(5000); Node can't do ANYTHING else until this complets normally without clustering
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hello world');
        })
    });
    // With clustering, this request can be completed in a new client even if the 5s delay is still in progress on a diff cluster
    app.get('/fast', (req, res) => {
        res.send('Immediate route');
    });

    app.get('/profile/:id', function(req, res) {
        res.send('you requested', req.params.id); // req.body
    })

    app.listen(3000);
}