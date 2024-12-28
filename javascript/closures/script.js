const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function makeTextSizer(size) {

    function changeSizer() {
        myName.style.fontSize = `${size}px`;
    }

    return changeSizer;
}

const size12 = makeTextSizer(12);
const size15 = makeTextSizer(15);
const size20 = makeTextSizer(20);
const size25 = makeTextSizer(25);

btn.addEventListener('click', size12);


function makeCounter() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter();
console.log(counter1)

counter1();
counter1();
console.log(counter1)



