function Product (id, name, amount) {
  this.id = id;
  this.name = name;
  this.amount = amount;

  this.print = function () {
    console.log(this.id + " " + this.name + " " + this.amount);
  }
}

function Inventory () {
  this.inventory = new Array();
  this.add = function(product) {
    this.inventory.push(product);
  }


  this.addFour = function () {
    if (this.inventory.length < 1) {
      console.log("fuck you");
    } else {
      this.inventory[0].amount += 4;
    }
  }

  this.print = function () {
    for (var i = 0; i < this.inventory.length; i++) {
      this.inventory[i].print();
    }
  }
}

var poop = new Inventory();
poop.addFour();
var prod = new Product(69, "shitcakes", 3);
poop.add(prod);
poop.addFour();
poop.print();
