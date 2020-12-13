//01 - Sum
// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau
// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau
var numbers = [];
var re = ",";
for (var i = 0; i < 50; i++) {
    var randomNumbers = Math.floor(Math.random() * (100 + 1));
    numbers = numbers + (randomNumbers + re);
}
console.table(["Ajout 50 éléments aléatoire entre 0 et 100", numbers]);



