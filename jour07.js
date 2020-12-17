// 01 - Alphabet
// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Ne pas utilisez la méthode .sort()
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"
function sortLetters(sortLettersString) {
    var sortLettersString = "konexio";
    var sortLettersSplit = sortLettersString.split("");
    var sortLettersSort = sortLettersSplit.sort(); {
        console.log(sortLettersSort.toString());
    }
}
sortLetters();
