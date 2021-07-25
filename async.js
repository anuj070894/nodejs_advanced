const https = require('https');

const start = Date.now();

function makeRequest() {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`1: ${Date.now() - start}`);
        })
    }).end();
}

setImmediate(() => {
    console.log('SET IMMEDIATE CALL EVENT LOOP');
});

makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
