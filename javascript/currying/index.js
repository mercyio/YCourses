// curing in javascript
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};
console.log(add(2)(3)(10));

// using arrow function
const addition = (a) => (b) => (c) => a + b + c;
console.log (addition(2)(4)(6));

// 
// 
function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending email to ${to} with subject ${subject} : ${body} `);

        };
    };
};

let step1 = sendAutoEmail("mercydanke@gmail.com");
let step2 = step1("New order confirmation");
step2("hey mercy you have a new order");

// 
//  using arrow function
const sendEmail = (to) => (body) => (subject) =>
    `Sending email to ${to} with subject ${subject} : ${body} `;

let action1 = sendAutoEmail("mercydanke@gmail.com");
let action2 = action1("New payment confirmation");
action2("hey mercy there is something for you");
 
// 
// 
const cookStew = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return ` ${ingredient1}, ${ingredient2}, ${ingredient3}`;
        };
    };
};
const myStew = cookStew("tomatoes")("pepper")("fish");
console.log(myStew);

//   
// refactor
const cookBeans = ingredient4 => ingredient5 => ingredient6 =>
    `${ingredient4}, ${ingredient5}, ${ingredient6}`;

const myBeans = cookBeans("tomatoes")("pepper")("fish");
console.log(myBeans);

// 
// multiply
const multiplyFunction = (x, y) => x * y;
const multiplyCurryFunction = x => y => x * y;

console.log(multiplyFunction(2, 3));
console.log(multiplyCurryFunction(4)(6));

// 
// 
const addCustomer = fn => (...args) => {
    console.log("saving customer info");
    return fn(...args);
};

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
};

let completeOrder = (...args) => {
    console.log(`order #${[...args].toString()} completed`);
};
 
completeOrder = (processOrder(completeOrder));
completeOrder = (addCustomer(completeOrder));
completeOrder('1000');

console.log(completeOrder);

// processOrder('1000')
// console.log(completeOrder)

// 
// standard way
function addCustomer2(...args) {
    return function processOrder2(...args) {
        return function completeOrder2(...args) {
            return fn(...args);
        };
    };
};

// 
// requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
            // bind creates new function
        };
        return fn(...args);
    };
};
// eg
const total = x => y => z => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(2)(4)(6));
