(function add(a, b) {
    console.log(a + b)
    return a + b
})(2, 3);

    (function say() {
        console.log("Hey");
    })();

(() => console.log("I am Es6"))();

        
const value = (() => 100)();
console.log(value)

const data = (async () => await fetch())()

const atm = function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amt) {
        if (amt > balance) {
            console.log("are you kidding?");
        } else {
            balance -= amt;
            return balance;
        };
    };
    return { withdraw };

};

const mercy = atm(1000);
console.log(mercy.withdraw(500));