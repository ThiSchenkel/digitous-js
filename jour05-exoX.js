var { addition, multiply } = require("./table-utils.js");


// 01 - Calculator
// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `*` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
function calculate(num1, operator, num2) {
    var number1 = parseInt(num1);
    var number2 = parseInt(num2);
    if (operator === "+") {
        console.log("Vous avez fait une addition");
        return number1 + number2;
    }
    if (operator === "-") {
        console.log("Vous avez fait une soustraction");
        return number1 - number2;
    }
    if (operator === "x") {
        console.log("Vous avez fait une muntiplication");
        return number1 * number2;
    }
    if (operator === "/") {
        console.log("Vous avez fait une division");
        return number1 / number2;
    }
    if (operator === "%") {
        console.log("Vous avez fait un pourcentage");
        return number1 % number2;
    }
}
if (process.argv.length !== 5) {
    console.log("Error :I'm expecting 3 parameters");
} else {
    console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
}
// on peut mettre le parseInt avant le process = console.log(calculate(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4])));



// 02 - Table
// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme
//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
function multiply(num) {
    for (i = 1; i <= 10; i++) {
        console.log(i + " x " + num + " = " + num * i);
    }
}
multiply(parseInt(process.argv[2]));


// 03 - Separate Table
// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
// - Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
// - Affichez la table d'addition
console.log(addition(parseInt(process.argv[2])));



// 04 - Guess
// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu





