// 01 - Comptons - A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200
var i = 50;
var x = 200;
while (i <= x) {
    console.log("Nombres pairs de 50 à 200 :", i);
    i = i + 2;
}

// correction équivalante du 01
// var i = 50;
// while (i < 200) {
//     i++;
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++
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


// 03 - Course
// Créez deux variables `ussainBolt` et `tysonGay` valant 0
// Tant que l'une des deux variables n'a pas dépassé 100 
// Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme
// Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier)
var ussainBolt = 0;
var tysonGay = 0;
do {
    var uRandom1 = Math.floor(Math.random() * (10 - 1 + 1 + 1));
    var tRandom2 = Math.floor(Math.random() * (10 - 1 + 1 + 1));
    ussainBolt = ussainBolt + uRandom1;
    tysonGay = tysonGay + tRandom2; {
        console.log("Résultats Bolt:", ussainBolt, "Résultat  Gay ", tysonGay);
    }
} while (ussainBolt <= 100 || tysonGay <= 100);

if (ussainBolt > tysonGay) {
    console.log("Vainqueur ussainBolt", ussainBolt)
}
else if (ussainBolt < tysonGay) {
    console.log("Vainqueur tysonGay", tysonGay);
}


// correction
while (ussainBolt < 100 || tysonGay < 100) {
    var uRandom1 = Math.floor(Math.random() * (10 - 1 + 1 + 1));
    var tRandom2 = Math.floor(Math.random() * (10 - 1 + 1 + 1));
    ussainBolt += uRandom1;
    tysonGay += tRandom2;
}
console.log(ussainBolt);
console.log(tysonGay);
if (ussainBolt > tysonGay) {
    console.log("Le vainqueur est UssainBolt");
} else if (tysonGay > ussainBolt) {
    console.log("Le vainqueur est tysonGay");
} else {
    console.log("Egalité");
}





