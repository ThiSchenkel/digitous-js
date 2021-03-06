// 01 - File System
// - Créez un fichier `jour07.txt` contenant le code suivant :
// - Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
// - Faites en sorte que chaque clé / valeur apparaisse sur une ligne séparée
var fs = require("fs");

fs.readFile("./jour07.txt", function (error, data) {
    console.log(data.toString());
})


// 02 - Map Double
// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
// - Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
// - Affichez les valeurs de `double` dans la console
var array = [1, 2, 3, 4, 5];
var double = array.map(function (num) {
    return num * 2;
});
console.log(double);


// 03 - Map Names
// - Créez une variable `longNames` 
// - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
// Affichez les valeurs de shortNames dans la console
var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
var shortNames = longNames.map(function (element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});
console.log(shortNames);
// var shortNames = longNames.map(element => (`${element.firstName} ${element.lastName}`))
// console.log(shortNames);



// 04 - Filter Numbers
// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// - Affichez les valeurs de `numbers` dans la console
var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function (number) {
    // return typeof number === "number";  => 3 solutions typeof et isNaN ou return parseInt (number) === number;
    return isNaN(number) === false;
});
console.log(numbers);


//05 - Filter Even
// - Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
// - Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
// - Affichez les valeurs de `even` dans la console
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function (element) {
    return (element % 2 === 0);
});
console.log(even);


// 06 - Cakes
// - Créez une variable `cakes` contenant la valeur suivante 
// - À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
// - Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console
var cakes =
    [
        {
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ]

var soldOut = cakes.filter(function (cake) {
    return cake.flavor === "chocolate";
}).map(function (cake) {
    cake.status = "Sold out!";
    return cake;
});
console.table(soldOut);


// ⭐ Bonus
// Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt ! Petit rappel des règles :
// - Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
// - Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
//     - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
//     - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" (x sera remplacé par le nombre de tentatives restantes)
// ⇒ Afficher un message en cas de victoire ou défaite





