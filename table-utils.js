function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${i} x ${num} = ${num * i}`);
    }
}
multiply(parseInt(process.argv[2]));


function addition(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${i} + ${num} = ${num + i}`);
    }
}
addition(parseInt(process.argv[2]));


module.exports = {
    multiply,
    addition,
};
