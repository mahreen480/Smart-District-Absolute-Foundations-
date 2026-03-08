function BankAccount(owner, initialBalance) {
  this.owner = owner;

  let balance = initialBalance;

  this.getBalance = function () {
    return balance;
  };

  this.deposit = function (amount) {
    balance += amount;
    console.log(this.owner + " deposited " + amount);
  };

  this.withdraw = function (amount) {
    if (amount > balance) {
      console.log("Not enough balance");
      return;
    }

    balance -= amount;
    console.log(this.owner + " withdrew " + amount);

    if (balance < 100) {
      if (this.lowBalanceCallback) {
        this.lowBalanceCallback(balance);
      }
    }
  };

  this.onLowBalance = function (callback) {
    this.lowBalanceCallback = callback;
  };
}

BankAccount.prototype.transfer = function (targetAccount, amount) {
  this.withdraw(amount);
  targetAccount.deposit(amount);

  console.log(
    this.owner + " transferred " + amount + " to " + targetAccount.owner
  );
};

function SavingsAccount(owner, balance, interestRate) {
  BankAccount.call(this, owner, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);

SavingsAccount.prototype.addInterest = function () {
  let interest = this.getBalance() * this.interestRate;

  this.deposit(interest);

  console.log("Interest added:", interest);
};

function CheckingAccount(owner, balance, transactionFee) {
  BankAccount.call(this, owner, balance);

  this.transactionFee = transactionFee;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);

CheckingAccount.prototype.withdraw = function (amount) {
  let total = amount + this.transactionFee;

  BankAccount.prototype.withdraw.call(this, total);
};

function feeCalculator(rate) {
  return function (amount) {
    return amount * rate;
  };
}

function createAccount(type, owner, balance, extra) {
  if (type === "savings") {
    return new SavingsAccount(owner, balance, extra);
  }

  if (type === "checking") {
    return new CheckingAccount(owner, balance, extra);
  }

  return new BankAccount(owner, balance);
}

module.exports = {
  createAccount,
  feeCalculator,
};