Object.prototype.getName = function() { 
  var funcNameRegex = /function (.{1,})\(/;
  var results = (funcNameRegex).exec((this).constructor.toString());
  return (results && results.length > 1) ? results[1] : "";
};



function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  this.print = function() {
    var roundedBalance = Math.ceil(this.balance * 100) / 100.0;
    console.log(this.name + " has " + roundedBalance  + " dollars.");
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

function BusinessAccount(name, balance, interestRate) {
  Account.call(this, name, balance);
  this.mergedAccounts = [];
  this.interestRate = interestRate;
  this.withdraw = function() {
    console.log("Need to merge a CheckingAccount with this account in order to withdraw!");
  }
  this.merge = function(otherAccount) {
    if (otherAccount.balance > 0) {
      if (otherAccount.getName() == "SavingsAccount") {
        this.interestRate = (otherAccount.interestRate + this.interestRate) / 2.0;
      }
      if (otherAccount.getName() == "CheckingAccount") {
        this.withdraw = otherAccount.withdraw;
      }
      this.mergedAccounts.push(otherAccount.name);
      this.balance += otherAccount.balance;
      otherAccount.balance = 0;
      otherAccount.name = "This account has been merged with " + this.name;
      var newname = "";
      this.mergedAccounts.forEach(function(value) {
      //  console.log(value);
        newname += value + "'s, ";
      });
      this.name = newname + "Business Account";
    } else {
      console.log("Can't merge an account with negative balance!");
    }
   
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
console.log(test.getName());
console.log(savings.getName());

var biz = new BusinessAccount("biz", 1000);
biz.print();
biz.withdraw();
biz.merge(test);
biz.print();
console.log(biz.withdraw(1000));
biz.print();
console.log(biz.withdraw(1000));
biz.merge(savings);
biz.print();

//console.log(test.prototype.toString.call);

