// 01 - Alphabet
// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"
function sortLetters(sortLettersString) {
    var sortLettersString = (sortLettersString);
    var sortLettersSplit = sortLettersString.split("");
    var sortLettersSort = sortLettersSplit.sort(); {
        console.log(sortLettersSort.toString());
    }
}
sortLetters("konexio");

// 02 - XOXO
// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false
function countEach(x, o) {
    var x = "xxx";
    var o = "ooooo";
    console.log(o.length, x.length);
    var numberO = o.length;
    var numberX = x.length;

    if (numberX > numberO) {
        console.log("False");
    }
    else if
        (numberO > numberX); {
        console.log("False");
    }
    else
    (numberO === numberX); {
        console.log("True");
    }
    return numberO, numberX;
}

countEach();