// 01 - File System
// - Créez un fichier `jour07.txt` contenant le code suivant :
// - Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
// - Faites en sorte que chaque clé / valeur apparaisse sur une ligne séparée
var fs = require("fs");

fs.readFile("./jour07.txt", function (error, data) {
    console.log(data.toString());
})
