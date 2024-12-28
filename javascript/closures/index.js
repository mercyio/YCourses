// a closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). in other words a closure gives you access to an open function scope from an inner function

function main() {
    const name = "Mercy Vincent";

    function sayMyName() {
        console.log(name);
    }

    sayMyName();
}

main();

function adder(num) {
    function add(b) {
        console.log(num + b)
    }

    return add
}
const addTo5 = adder(5)
const addTo10 = adder(10)

addTo5(10)  
addTo10(2)  

// practical closures
function makeCount() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter = makeCount();
console.log(counter)

counter();
counter();
counter();
counter();


console.log('second counter function')
const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
//   console.log(counter1.value()); 
  
  counter1.increment();
counter1.increment(); 
console.log(counter1.value()); 
// console.log(counter2.value()); 
  
  
  counter1.decrement();
  console.log(counter1.value()); 
  console.log(counter2.value()); 
