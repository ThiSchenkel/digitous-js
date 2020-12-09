// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1], ingredients.indexOf("butter"));

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];
console.log("objects:", objects, objects.unshift("chair"), objects.pop("lamp"), objects.push("laptop"), objects.shift("chair"));

// 04 - Order
var number = [1, 10, 8, 12, 6];
console.log(number.reverse(), number.sort((a, b) => a - b));

// 05 - Boucle (chkreunieunieu!!!)
var total = 0;
var limit = 10;
for (var i = 1; i <= limit; total = i++) {
    console.log(total);
}

// 06 - Reverse
var sentence = "Hello Konexio !";
var reverseString = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    console.log(reverseString = reverseString + sentence[i]);
}


