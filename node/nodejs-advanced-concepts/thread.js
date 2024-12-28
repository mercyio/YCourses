process.env.UV_THREADPOOL_SIZE = 6 

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1) amount of time in sec it takes to cal the hash is:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2) amount of time in sec it takes to cal the hash is:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3) amount of time in sec it takes to cal the hash is:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4) amount of time in sec it takes to cal the hash is:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5) amount of time in sec it takes to cal the hash is:', Date.now() - start);
});