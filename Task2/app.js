const { createAccount, feeCalculator } = require("./appFactory");

const alice = createAccount("savings", "Alice", 500, 0.05);
const bob = createAccount("checking", "Bob", 300, 5);

alice.onLowBalance(function (balance) {
  console.log("Warning! Alice low balance:", balance);
});

bob.onLowBalance(function (balance) {
  console.log("Warning! Bob low balance:", balance);
});

alice.deposit(200);
alice.withdraw(650);

bob.deposit(100);
bob.withdraw(250);

alice.transfer(bob, 50);

const calculateATMFee = feeCalculator(0.02);

const fee = calculateATMFee(500);

console.log("ATM Fee:", fee);

function showOwner() {
  console.log("Account owner:", this.owner);
}

showOwner.call(alice);

showOwner.apply(bob);

const boundFunction = showOwner.bind(alice);
boundFunction();

const tempUser = {
  owner: "Temporary User",
};

alice.deposit.call(tempUser, 100);