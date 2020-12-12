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
// les chiffres : sortie d'une fonction, retire ou ajoute et retourne le tableau

// Correction
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log("objects:", objects);
objects.pop();
console.log("objects:", objects);
objects.push("laptop");
console.log("objects:", objects);
objects.shift();
console.log("objects:", objects);


// 04 - Order
var numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);
console.log(numbers.sort((a, b) => a - b));

// 05 - Boucle (Correction)
var total = 0;
var limit = 10;
for (var i = 0; i <= limit; i++) {
    total += i;
    console.log(total);
}

// 06 - Reverse
var sentence = "Hello Konexio !";
var reverseString = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    console.log(reverseString = reverseString + sentence[i]);
}

// Bonus II
total = 0;
limit = 10;
i = 0;
while (i <= limit) {
    total = total + i;
    i++;
}
console.log(total);

// Bonus III
var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * (max - min + 1));
console.log(promo[random]);

// Bonus IV
var arr = [];
var min = 0;
var max = 100;
for (i = 0; i < 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1));
    arr.push(random);
}

var arrayMax = arr[0];
for (i = 1; i < 20; i++) {
    if (arr[i] > arrayMax) {
        arrayMax = arr[i];
    }
}
console.log(arrayMax)


