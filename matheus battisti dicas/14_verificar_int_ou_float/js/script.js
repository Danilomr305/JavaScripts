// é int ou float

var a =10;
var b = 1.8;

console.log(typeof a);
console.log(typeof b);

// % 

function checkFloat(num) {
    if(num % 1 === 0) {
        console.log("É um inteiro")
    }else {
        console.log("É um float")
    }
}

checkFloat(a);
checkFloat(b);

console.log(b % 1);
console.log(13.74274873 % 1);

//isInteger

console.log(a);
if(Number.isInteger(a)) {
    console.log("É inteiro");
}else {
    console.log("É float");
}

console.log(a);
if(Number.isInteger(a)) {
    console.log("É inteiro");
}else {
    console.log("É float");
}