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

var array = [`1`, `2`, `3`, `4`, `5`];
var double = array.map(function (num) {
    return num * 2;
});
console.log(double);


// 03 - Map Names - A TERMINER
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
    var name = element.firstName + element.lastName;
    return name;
});

console.log(shortNames);


// 04 - Filter Numbers
// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// - Affichez les valeurs de `numbers` dans la console

var array = [1, "toto", 34, "javascript", 8];
var number = array.filter(function (number) {
    return number >= 0;
});
console.log(number);



