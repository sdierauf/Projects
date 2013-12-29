function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  this.print = function() {
    console.log(this.name + " has " + this.balance  + " dollars.");
  }
}

//CheckingAccount.prototype = new Account();

function CheckingAccount(name, balance) {
  Account.call(this, name, balance);
  this.withdraw = function(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      return amount;
    } else {
      return "You don't have enough money!";
    }
  }
}

var log10 = function(val) {
  return Math.log(val) / Math.LN10;
}


function SavingsAccount(name, balance, interestRate) {
  Account.call(this, name, balance);
  this.interestRate = interestRate;
  this.interest = function() {
    this.balance += this.balance * this.interestRate;
  }

  this.byearsUntil = function(desiredAmount) {
    var counter = 0;
    var amount = this.balance;
    while (amount < desiredAmount && counter < 10000) {
      amount += amount * this.interestRate;
      counter++;
    }
    console.log(amount);
    return counter;
  }

  this.yearsUntil = function(desiredAmount) {
    return Math.ceil((log10(desiredAmount / this.balance) + 0.0)  /
                     log10(1.0 + this.interestRate));
  }
}

var test = new CheckingAccount("stefan", 500);
var savings = new SavingsAccount("Billy", 20, 0.06);

console.log(test.name);
console.log(test.withdraw(400));
console.log(test.withdraw(400));
test.print();
for (var i = 0; i < 10; i++) {
  savings.interest();
  savings.print();
}
console.log(savings.yearsUntil(3000000));
console.log(savings.byearsUntil(3000000));

