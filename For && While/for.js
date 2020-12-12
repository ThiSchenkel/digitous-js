
//-------------------------Exercices de l'apres-midi --------------------------


// une boucle qui lance 10 fois un dé et qui à chaque fois affiche le résultat du dé => tirer une valeur aléatoire entre 1 et 6
var max = 6;
var min = 1;
for (i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

// additionner le résultat de mes 10 lancés et je l'affiche
var max = 6;
var min = 1;
var resultat = 0;
for (var i = 0; i < 10; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    resultat = resultat + dice;
    console.log(dice); // enlever pour le console log pour ne pas voir les lancés
}
console.log("Resultat", resultat);


// // afficher ts les entiers entre 0 et 100 (532 à 897 : remplacer les valeurs 0 et 100 ___ un entier sur 3 entre 532 et 897 : remplacer i++ par i + 3)
for (i = 0; i <= 100; i++) {
    console.log(i);
}

// afficher ts les entiers de 100 à 0 / peut marquer i > -1 / i - =2 : entier pair
for (var i = 100; i >= 0; i--) {
    console.log(i);
}

// afficher la somme de ts les entiers allant de 25 à 75 (résultat : 2550)
var somme = 0;
for (var i = 25; i <= 75; i++) {
    somme = somme + i;
    console.log(somme);
}
console.log(somme);


// afficher la multiplication de tous les entiers allant de 10 à 15 (résultat : 3603600) : en multiplication, penser au à i = 1
var multi = 1;
for (var i = 10; i <= 15; i++) {
    multi = multi * i;
}
console.log(multi);

// afficher la somme des entiers pairs allant de 0 à 100
var result3 = 0;
for (var i = 0; i <= 100; i += 2) {
    result3 = result3 + i;
}
console.log(result3);

// afficher ts les multiples de 7 entre 0 et 1000
for (var i = 0; i <= 1000; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}
//ou 
for (var i = 0; i <= 1000; i += 7) {
    console.log(i);
}



// multiple de 7

var number = 7;
for (i = 0; i <= 10; i++) {
    // console.log(i);
    // console.log(i * number);
    console.log(i + " x " + number + " = " + number * i);

}

var number = 7;
for (i = 10; i >= 0; i--) {
    // console.log(i);
    console.log(i + " x " + number + " = " + number * i);
    console.log(`${i} x ${number} = ${number * i}`);

}

