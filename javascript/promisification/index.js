// without promise
function loadScript(src, callback) {
    const script = document.createElement("script");

    script.src = src;

    script.onload = () => callback(null, script);
    
    script.onerror = (err) => callback(err);

    document.head.appendChild(script);
};

const loadScriptNew = promisify(loadScript)
// loadScriptNew('test.js').then( () => console.log("Done:")).catch((err) => console.log('hey'))




    
    (async () => {
        const result = await loadScriptNew('test')
        console.log(result);
} )

// loadScript('test.js', (err, script) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Script loaded")
//     }
// });

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if (error) return reject(error);
                return resolve(result);
            });
        });
    };
}