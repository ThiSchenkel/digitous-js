// 01 - Format - correction
// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console
function formatData(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    {
        console.log(`${day}/${month}/${year}`);
    }
}
formatData("2020-12-17");


// 02 - Age - correction
// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console
// Rappel : Les dates commencent à l'année 1970 !
function calculateAge(dateString) {
    var birthday = new Date(dateString);
    var today = new Date();
    var diff = today - birthday;
    var diffDate = new Date(diff); {
        console.log(diffDate.getFullYear() - 1970);
    }
}
calculateAge("9-7-1993");




