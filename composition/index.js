function add(a, b) {
    return a + b
}

function square(val) {
return val * val
}
console.log(square(add(2, 3)))


function multiply(args) {
    return args[0] * args[1]
}
 
function addTwoAndSquare(a, b) {
    return square(add(a , b ))
}
console.log(addTwoAndSquare(2, 3))

const addResults = add(2, 3);
console.log(square(addResults))


// composition function
function composeTwoFunction(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a,b))
    }
}

function compose(...fns) {
    return function (...values) {
        return fns.reduce((a, b) => b(a), values ) 
    }
}

const composeAll =
    (...fns) =>
        (...val) =>
        fns.reduce((a, b) => b(a), val)


const task = composeTwoFunction(add, square)
console.log(task(2,3))

// compose unlimited function