function Ingredient(name, flavor) {
  this.name = name;
  this.flavor = flavor;
}

function Recipe(name) {
  this.name = name;
  //this.category = "";
  this.ingredients = [];
  this.addIngredient = function(ingredient, amount) {
    //check if the ingredient exists
    //if it does, increment it amount
    //if it doesnt, push it
    var found = false;
    this.ingredients.forEach(function(value) {
      if (value.ingredient.name = ingredient.name) {
        found = true;
        value.amount += amount;
      }
    });
    if (!found) {
      var ing = {ingredient:ingredient, amount:amount};
      this.ingredients.push(ing);
    }
  }
  this.printPretty = function() {
    console.log("How to make '" + this.name + "':");
    console.log("You need ");
    this.ingredients.forEach( function(value) {
      console.log(value.amount + "x " + value.ingredient.name);
    });
  }
}


//need to separate recipes out into breakfast, dinner, snacks, desserts efficiently
//one array for each? inefficient to iterate over whole recipes array...
function CookBook(title) {
  this.title = title;
  this.recipes = [];
  this.addRecipe = function(recipe) {
    var category = this.determine(recipe);
    console.log(category);
    if (this.recipes.indexOf(recipe) == -1) {
      this.recipes.push({recipe:recipe, category:category});
    }
  }

  this.printSection = function(section) {
    section = section.toLowerCase();
    console.log("Printing all recipes in the "  + section + " section");
    this.recipes.forEach(function(value) {
      if (value.category == section) {
        value.recipe.printPretty();
      }
    });
  }
  
  this.printAll = function() {
    this.recipes.forEach( function(value) {
      value.recipe.printPretty();
    });
  }

  this.determine = function(recipe) {
    var flavorMap = {sweet:0, savory:0, bitter:0, sour:0};
    recipe.ingredients.forEach( function(value) {
      switch(value.ingredient.flavor) {
        case "sweet":
          flavorMap.sweet += value.amount;
          break;
        case "savory":
          flavorMap.savory += value.amount;
          break;
        case "bitter":
          console.log("bitter!");
          flavorMap.bitter += value.amount;
          console.log(flavorMap.bitter);
          break;
        case "sour":
          flavorMap.sour += value.amount;
          break;
        default:
          console.log("badly formatted ingredient");
      }
    });
    var flavor = {flavor:"sweet", amount:flavorMap.sweet};
    for (var propt in flavorMap) {
      if (flavorMap[propt] > flavor.amount) {
        flavor.flavor = propt + "";
        flavor.amount = flavorMap[propt];
      }
    }
    console.log(flavor.flavor);
    console.log(flavor);
    //get most popular flavor
    //set category
    switch(flavor.flavor) {
      case "sweet":
        return "breakfast";
        break;
      case "savory":
        return "dinner";
        break;
      case "bitter":
        return "snack";
        break;
      case "sour":
        return "lunch";
        break;
      default:
        return "snack";
    }
  }
}

var p = new Ingredient("poop", "bitter");
var rec = new Recipe("poopy poop");
rec.addIngredient(p, 5)
rec.addIngredient(p, 10);
var book = new CookBook("Cooking with Poop");
book.addRecipe(rec);
console.log(rec.ingredients);
rec.printPretty();
