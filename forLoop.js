// 01 - Somme des carrés
// Calculez la somme des carrés des nombres de 5 à 10
// Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25 => Resultat attendu: 355
var somme = 0;
for (i = 5; i <= 10; i++) {
    var square = i * i; // somme += i*i
    somme = somme + square;
}
console.log("Somme des carrés :", somme);


//  02 - Comptons
// Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000 =>Résultat attendu: 128
var totalMultiple7 = 0;
for (i = 100; i != 1000; i++) {
    if (i % 7 === 0) {
        totalMultiple7 = totalMultiple7 + 1 // totalMultiple7++
    }
}
console.log("Nombre de multiples de 7 : ", totalMultiple7);


// 03 - Chanceux = Lancez un dé 20 fois et affichez la somme de tous les résultats plus grand ou égale à 5
var min = 1;
var max = 6;
var somme = 0;

for (var i = 1; i <= 20; i++) // (i =0; i<20; i++) 
{
    var random = Math.floor(Math.random() * (max - min + 1) + min); {
        console.log("Tirage de dés ", i, " fois: ", random); {
            if (random >= 5) {
                somme = somme + random; // somme +=random
            }
        }
    }
}
console.log("Total Somme: ", somme);


