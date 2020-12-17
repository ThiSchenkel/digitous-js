// 01 - Alphabet
// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"
function sortLetters(sortLettersString) {
    var sortLettersString = (sortLettersString);
    var sortLettersSplit = sortLettersString.split("");
    var sortLettersSort = sortLettersSplit.sort(); {
        console.log(sortLettersSort.join(""));
    }
}
sortLetters("konexio");



// 02 - XOXO
// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false
function countEach(x, o) {
    var x = "xxxxx";
    var o = "oooooooo";
    var numberO = o.length;
    var numberX = x.length;
    console.log(o.length, x.length);

    if (numberX > numberO) {
        console.log("False1");
    }
    else if (numberX < numberO) {
        console.log("False2")
    }
    else if
        (numberO === numberX) {
        console.log("True");
    } console.log(x, o)
}
countEach();


//03 - Palindrome
// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"
function checkPal(string) {
    if (string.split("").reverse("").join("") === string) {
        console.log("It's OK!")
    } else {
        console.log("Nope");
    }
}
checkPal("racecar");



