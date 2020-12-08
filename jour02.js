// 01 - Number => 102 13.9
var integer = 102;
var float = 13.9;
console.log(integer, float);

// 02 - Convert
var basic = 34;
stringifield = basic.toString();
console.log(stringifield);

// 03 - Round => 2
var num = 1.5;
var rounded = Math.round(1.5);
console.log(rounded);

// 04 - Arithmétique => 
var test = 12;
var bis = 5;
console.log(test + bis); // 17
console.log(test - bis); // 7
console.log(test / bis); // 2.4
console.log(test * bis); // 60
console.log(test ** bis); // 248832
console.log(test % bis); // 2

// 05 - Comparaison
var test = 143;
var bis = 219;
console.log(test > bis); // false
console.log(test < bis); // true
console.log(test = bis); // 219
console.log(test == bis); // true
console.log(test === bis); // true
console.log(test >= bis); // true
console.log(test <= bis); // true

// 06 - Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok good!");
} else {
    console.log("On nooooo....!");
}

// 07 - Condition 2
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
}

// 08 - Condition 3
if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}


// Bonus 1
var random = Math.floor(Math.random() * (10 - 6 + 1) + 1);
console.log(random);

if (random == 6) {
    console.log("Yes I win !");
} else {
    console.log("So close...");
}















