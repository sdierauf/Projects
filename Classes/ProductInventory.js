Object.prototype.getName = function() { 
     var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec((this).constructor.toString());
     return (results && results.length > 1) ? results[1] : "";
};

function Product (price, id, quantity) {
  this.price = price;
  this.id = id;
  this.quantity = quantity;

  this.print = function () {
    console.log(this.price + " " + this.id + " " + this.quantity);
  }
}

function Inventory () {
  this.inventory = [];

  this.addItem = function(product) {
    var index = this.containsProduct(product.id);
    if (index != -1) {
      this.inventory[index].quantity += product.quantity;
    } else {
      this.inventory.push(product);
    }
  }

  this.totalSum = function() {
    var sum = 0;
    this.inventory.forEach(function(value, index) {
      sum += value.price * value.quantity;
    });
    return sum;
  }


  this.containsProduct = function(id) {
    var indexToReturn = -1;
    this.inventory.forEach(function(value, index) {
      if (id == value.id) {
        indexToReturn = index;
      }
    });
    return indexToReturn;
  }

  this.printInventory = function() {
    console.log("price id quantity");
    console.log("_________________");
    this.inventory.forEach(function(entry) {
      entry.print();
    });
    console.log();
  }

  this.printSum = function() {
    console.log("Total sum is: " + this.totalSum());
  }
}


var inv = new Inventory();
var prod = new Product(4, 123, 4);
inv.printInventory();
inv.addItem(prod);
inv.printInventory();
inv.addItem(prod);
inv.printInventory();
var otherProd = new Product(10, 20, 30);
inv.addItem(otherProd);
inv.addItem(new Product(5, 6, 7));
inv.addItem(new Product(5, 12, 14));
inv.addItem(new Product(5, 12, 6));
inv.printInventory();
console.log(inv);
inv.printSum();

