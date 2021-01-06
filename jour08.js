//  01 - Countries
// À l'aide de l'url suivante : "https://restcountries.eu/rest/v1/all:
// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret
var request = require("request");

var countriesNames = [];
function getCountries(allCountries) {
    request.get("https://restcountries.eu/rest/v1/all", function (error, response, body) {
        var country = JSON.parse(body);
        for (var i = 0; i < country.length; i++) {
            countriesNames.push(country[i].name);
        } console.log(countriesNames.join(" - "));
    });
}
getCountries();

// avec .map()
request.get("https://restcountries.eu/rest/v1/all", function (error, response, body) {
    var countries = JSON.parse(body);
    var pays = countries.map(function (element) {
        return element.name;
    })
    console.log(pays.join(" - "));
})



//02 - Chuck Norris
// À l'aide de l'api suivante (lisez bien la documentation) : https://api.chucknorris.io/
// - Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console

function getFact(blagounette) {
    request.get("https://api.chucknorris.io/jokes/random", function (error, response, body) {
        var blague = JSON.parse(body);
        console.log("Blague de Chuck Norris :", blague.value);
    });
};
getFact();



// 03 - Pokemon
// À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :
// - Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console : id: xxx // remplacer xxx par l'id du pokemon - name: "xxx" // remplacer xxx par le nom du pokémon
function catchPokemon(id) {
    request.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (error, response, body) {
        var pokemon = JSON.parse(body);
        console.log(`Mon pokemon numéro ${pokemon.id} s'appelle : ${pokemon.name}`);
    })
};
catchPokemon(125);