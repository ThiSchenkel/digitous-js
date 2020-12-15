function multiply(num) {
    var table = 0;
    for (i = 1; i <= 10; i++) {
        table = (i + num) + (num * i);
        console.log(i + "x" + num + " = " + num * i);
    }
    return table;
}
multiply(5);


function addition(num) {
    var somme = 0;
    for (i = 1; i <= 10; i++) {
        somme = i + num;
        console.log(i + "+" + num + " = " + somme);
    }
    return somme;
}
addition(2);


module.exports = {
    multiply,
    addition,
};
