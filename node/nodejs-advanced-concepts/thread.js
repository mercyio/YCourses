const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('amount of time in sec it takes to cal the hash is:', Date.now() - start);
});