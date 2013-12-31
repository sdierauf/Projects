var reverse = function(string) {
  var reversed = "";
  for (var i = string.length; i > 0; i--) {
    reversed += string.slice(i-1, i);
  }
  console.log(reversed);
}
reverse("a dog, a pan, in a pagoda");

var pigLatin = function(string) {
  //if first letter isnt a vowel
  
  var words = string.split(/[ ,]+/);
  words.forEach( function(value) {
    var firstLetter = value.slice(0, 1);
    if ("aeiou".indexOf(firstLetter) == -1 ) {
      console.log(value.slice(1) + "-" + firstLetter + "ay");
    } else {
      console.log(value + "-ay");
    }
  });
}

pigLatin("banana");
pigLatin("avocado");
pigLatin("a dog, a pan, in a pagoda");

var isPalindrome = function(string) {
   if (string.length < 2) {
     return true;
   } else {
     return (isPalindrome(string.slice(1, string.length -1)) && 
             string.slice(0, 1) == string.slice(string.length - 1));
   }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("racecard"));

var countVowels = function(string) {
  string = string.toLowerCase();
  var count = 0;
  var chars = string.split("");
  //console.log(chars);
  chars.forEach( function(c) {
    //console.log(c);
    if ("aeiou".indexOf(c) != -1) {
      count++;
    }
  });
  console.log(count);
}
countVowels("aeiou");
countVowels("My dog has fleas");

var countWords = function(string) {
  return string.split(/[ ,\n]+/).length;
}
console.log(countWords("My dog has fleas"));

var $ = require('jquery').create();

$.getJSON('http://itsthisforthat.com/api.php?json',function(data) {
  console.log(data);
});

var rssFeed = function(feedURL) {
  $.get(feedURL, 'xml', function(data) {
    console.log(data);
  });
}
//wont work because xss
//rssFeed('https://news.ycombinator.com/rss');


