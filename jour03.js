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
// console.log("Length", sentence.length);
for (var i = sentence.length - 1; i >= 0; i--) {
    // console.log(sentence.charAt(i));
    reverseString = reverseString + sentence.charAt(i);
}
console.log(reverseString);


//⭐ Bonus
// - Créez une boucle qui part de 0 et s'arrête à 100
// - À chaque itération :
//     - Si `i` est un multiple de 3 ⇒ affichez "fizz"
//     - Si `i` est un multiple de 5 ⇒ affichez "buzz"
//     - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
//     - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
//     - Sinon, affichez la valeur de i
for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log();
    } else {
        console.log(i);
    }
}


// Bonus II
var total = 0; // exo5
var limit = 10;
for (var i = 0; i <= limit; i++) {
    total += i;
}
console.log("Exo5", total);

var total = 0;
var limit = 0;
while (i < 10) {
    i++;
    total += i;
}
console.log("Bonus II ", total);


// Bonus III
// - Créez un tableau avec le nom de chacun de vos camarades de promo
// - Affichez aléatoirement le nom de la personne tiré au sort
var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * (max - min + 1));
console.log("numéro tiré", promo[random]);

while (random === 2) {
    random = Math.floor(Math.random() * (max - min + 1));
} // "tant que je tombe sur 2, le dé se relance"


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


