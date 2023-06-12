var json = '{"nome":"Danilo", "Idade":"19", "Profissão:"Programador"}';

console.log(json);
console.log(typeof json);

//JSON 
var obj = JSON.parse(json);

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj["idade"]);

var jsonFromObj = JSON.stringify(obj);

console.log(jsonFromObj);