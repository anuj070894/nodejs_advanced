/*

const crypto = require('crypto');
const fs = require('fs');

const https = require('https');

const start = Date.now();

function makeRequest() {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`REQ: ${Date.now() - start}`);
        })
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`HASH: ${Date.now() - start}`);
    });
}

// makeRequest();

fs.readFile('multitask.js', 'utf-8', () => {
    console.log('FS: ', Date.now() - start);
});

// doHash();
// doHash();
// doHash();
// doHash();

// FS: 1

*/
const crypto = require('crypto');
const fs = require('fs');

const https = require('https');

const start = Date.now();

function makeRequest() {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`REQ: ${Date.now() - start}`);
        })
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`HASH: ${Date.now() - start}`);
    });
}

makeRequest();

fs.readFile('multitask.js', 'utf-8', () => {
    console.log('FS: ', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();

// REQ: 363
// HASH: 694
// FS:  695
// HASH: 699
// HASH: 705
// HASH: 721
