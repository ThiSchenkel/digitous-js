// 01 - Object
// - Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
// - Affichez `cat` dans la console
// - Affichez la valeur de `age` dans la console
// - À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
};
console.log(cat);
console.log(cat.age);
if (cat.IsCute) {
    console.log("So Cute!");
}


// 02 - Combine
// - Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
// - Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` dans la console
// - Affichez la valeur de `isCute` de `cat2` dans la console
var cat2 = {
    name: "Taki",
    age: 10,
    isCute: false,
};
console.log(cat2);

var cats = [cat, cat2];
console.log(cats.age, cats[0].age);  // =  console.log(cat2.isCute, cat[1].isCute);


//  03 - Even
// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats (penser au modulo)
function checkIfEven(num) {
    if (num % 2 == 0) {
        num = num++, "Even";
        console.log("Even", num);
    }
    else {
        console.log("Odd", num);
    }
}
checkIfEven(16);



// 04 - Compare
// - Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`num1` is bigger" si `num1` est plus grand
//     - "`num2` is bigger" si `num2` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
        return num1;
    } else if
        (num2 > num1) {
        console.log(`${num2} is bigger`);
        return num2;
    } else if
        (num1 === num2) {
        console.log("Both are the same");
    }
}
compare(8, 7);



// 05 - Add Up
// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78
var total = 0;
function addUp(num) {
    for (var i = 1; i <= num; i++) {
        total = total + i; // = total +=i;
        console.log(total);
    }
}
addUp(12);



//  06 - Time
// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`
function format(num) {
    var secondes = num;
    var temps = new Date();
    temps.setTime(secondes * 1000);
    console.log("Il est :", (temps.getHours() - 1) + ":" + temps.getMinutes() + ":" + temps.getSeconds());
}
format(3700);

function format(num) {
    var time = 0;
    var nbHours = Math.floor(num / 3600);
    num = num - (nbHours * 3600);
    var nbMinutes = Math.floor(num / 60);
    num = num - (nbMinutes * 60);
    var nbSeconds = num;
    if (nbHours > 0)
        time = time + nbHours + ":";

    if (nbMinutes > 0)
        time = time + nbMinutes + ":";

    if (nbSeconds > 0)
        time = time + nbSeconds; {
        console.log("Il est :", time);
    }
    return time;
}
format(3700);

// Correction exo6
function format(num) {
    var heure = Math.floor(num / 3600);
    var rest = num % 3600;
    var minutes = Math.floor(rest / 60);
    var secondes = rest % 60;
    console.log(`${heure}: ${minutes}: ${secondes}`);
}
format(3700);


// ⭐ Bonus
// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 et plus grand que 15, la fonction retourne "error"







