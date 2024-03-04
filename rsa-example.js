// Import the Node-RSA library
const NodeRSA = require('node-rsa');

// Create a new RSA key pair with a key length of 512 bits
const key = new NodeRSA({ b: 512 });

// The text to be encrypted
const text = 'Hello RSA!';

// Encrypt the text using the public key
const encrypted = key.encrypt(text, 'base64');

// Output the encrypted text
console.log('Encrypted: ', encrypted);

// Decrypt the encrypted text using the private key
const decrypted = key.decrypt(encrypted, 'utf8');

// Output the decrypted text
console.log('Decrypted: ', decrypted);
