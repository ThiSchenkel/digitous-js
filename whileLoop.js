// 01 - Comptons - A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200
// var i = 50;
// var x = 200;
// while (i <= x) {
//     console.log(i);
//     i = i + 2;
// }

// 02 - Try again - Créez une variable `dice` valant null et une variable `count` valant 0
// Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`
// Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6
var dice = null;
var count = 0;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (6 + 1));
    console.log("Résultat final s'arrête à 6 :", dice);
    if (dice <= 6); {
        count = count + 1;
    }
}
console.log("Nombre de lancés de dé", count);

