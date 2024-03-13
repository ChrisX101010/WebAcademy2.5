const fs = require('fs');
const crypto = require('crypto');


const filePath = 'largefile.txt';


const readStream = fs.createReadStream(filePath);


const hash = crypto.createHash('sha256');


readStream.on('data', (chunk) => {
    hash.update(chunk);
});


readStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log('SHA-256 Hash:', fileHash);
});


readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
