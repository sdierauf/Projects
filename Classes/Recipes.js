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
    if (this.recipes.indexOf(recipe) == -1) {
      this.recipes.push({recipe:recipe, category:category});
    }
  }
}

var p = new Ingredient("poop", "sour");
var rec = new Recipe("poopy poop");
rec.addIngredient(p, 5)
rec.addIngredient(p, 10);

console.log(rec.ingredients);
rec.printPretty();
