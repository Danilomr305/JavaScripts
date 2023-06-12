var str = "Esta string tem alguns espaços desnecessários!";

console.log(str);

console.log(str.replace(/( )+/g, " "));

function removerEspacosDuplicados(str) {
    return str.replace(/( )+/g, " ");

}

console.log(removerEspacosDuplicados("Olá      Mundo!"));
console.log(removerEspacosDuplicados("A função    funcionou mesmo!"))