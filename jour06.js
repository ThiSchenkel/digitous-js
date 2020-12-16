// 01 - Format
// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console
// function formatDate(aaaa, mm, jj) {
//     var year = new.Date(aaaa);
//     var month = new.Date(mm);
//     var day = new.Date(jj);
//     console.log(`${day}/ ${month}/ ${year}`);
// }
// formatDate(12, 12, 2004);
// console.log(multiply(parseInt(process.argv[2], process.argv[3], process.argv[4])));


function formatData(aaaa, mm, jj) {
    var date = new Date;
    var aaaa = date.getFullYear();
    var mm = date.getMonth();
    var jj = date.getDate(); {
        console.log(`${jj} / ${mm} / ${aaaa}`);
    }
}
formatData();
