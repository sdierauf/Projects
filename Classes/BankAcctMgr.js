var Account = function(name, balance) {
  this.name = name;
  this.balance = balance;
  this.withdraw = function(amount) {
    this.balance -= amount;
    return amount;
  }
 // return this;
}

var CheckingAccount = function(name, balance) {
  this.name = name;
  this.balance = balance;
  this.withdraw = function(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
    } else {
      console.log("You don't have enough money!");
    }
  }
};

var SavingsAccount = function(name, balance) {
  this.name = name;
  this.balance = balance;
}

CheckingAccount.prototype = new Account(CheckingAccount.name, CheckingAccount.balance);


var test = new CheckingAccount("Stefan", 500);
console.log(test);
console.log(test.name);
console.log(test.balance);
//test.poop();
test.withdraw(400);
console.log(test.balance);
test.withdraw(400);

var simple = new Account("Wall St.", 3);
console.log(simple.balance);
simple.withdraw(500000000);
console.log(simple.balance);
