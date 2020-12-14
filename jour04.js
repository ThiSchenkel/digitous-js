// 01 - Object
// - Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
// - Affichez `cat` dans la console
// - Affichez la valeur de `age` dans la console
// - À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`
// var cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
// }
// console.log(cat);
// console.log(cat.age);
// if (IsCute = true) {
//     console.log("So Cute!");
// }

// 02 - Combine
// - Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
// - Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` dans la console
// - Affichez la valeur de `isCute` de `cat2` dans la console
// var cat2 = {
//     name: "Taki",
//     age: 10,
//     isCute: false,
// }

// var cats = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
//     name: "Taki",
//     age: 10,
//     isCute: false,
// }
// console.log(cats.age);
// console.log(cat2.isCute);

//  03 - Even
// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats (penser au modulo)
// function checkIfEven(num) {
//     if (num % 2 == 0) {
//         num = num++, "Even";
//         console.log("Even", num);
//         return num;
//     }
//     else {
//         console.log("Odd", num);
//         return num;
//     }
// }
// var myNum = checkIfEven(16);
// console.log(myNum);

// 04 - Compare
// - Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`num1` is bigger" si `num1` est plus grand
//     - "`num2` is bigger" si `num2` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats
function compare(num1, num2) {
    if (num1 > num2) {
        console.log("Num1 is bigger");
        return num1;
    } else if
        (num2 > num1) {
        console.log("Num2 is bigger");
        return num2;
    } else if
        (num1 === num2) {
        console.log("Both are the same");
    }
}
var myCompare = compare(7, 7);
console.log(myCompare);




