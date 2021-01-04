// 01 - Format - correction
// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console
function formatData(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    {
        console.log(`${day}/${month}/${year}`);
    }
}
formatData("2020-12-27");


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
calculateAge("9-7-1993"); // voir npm "moment" => console.log(moment(dateString).fromNow());


//  03 - Validator
// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"
var prompt = require("prompt");

var schema = {
    properties: {
        name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },
        email: {},
        password: {},
    }
};
prompt.start();

prompt.get(schema, function (err, result) {
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log(`Email :` + result.email);
    console.log(`Password :` + result.password);
});




