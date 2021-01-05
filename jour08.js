//  01 - Countries
// À l'aide de l'url suivante : "https://restcountries.eu/rest/v1/all:
// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret
var request = require("request");


// request.get("https://restcountries.eu/rest/v1/all", function (error, response, body) {
//     var name = JSON.parse(body);
//     console.log(name);
// });

function getCountries(allNames) {
    request.get("https://restcountries.eu/rest/v1/all", function (error, response, body) {
        var name = JSON.parse(body);
        console.log(name);
    })
};
var result = getCountries();
console.log(result);

// var countriesNames = [];
// countriesNames = result.filter(function (countries) {
//     return countries.name;
// });
// console.log(countriesNames);



