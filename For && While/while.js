// executer plusieurs fois le meme code, tant qu'une condition est vraie
var max = 6;
var min = 1;
var dice = Math.floor(Math.random() * (max - min + 1) + min);
while (dice !== 6) {

    dice = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(dice)
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}


// exercice de For de 0 à 100
var i = 0;
while (i <= 100) {
    console.log(i);
    i = i + 2;
}

// somme des entier allant de 25 à 75 (résultat : 2550)
var i = 25;
var somme = 0;
while (i <= 75) {
    console.log(i);
    somme = somme + i;
    i = i + 1;
}
console.log(somme);

// exercice avec FOR
var somme = 0;
for (var i = 25; i <= 75; i++) {
    somme = somme + i;
}
console.log(somme);

