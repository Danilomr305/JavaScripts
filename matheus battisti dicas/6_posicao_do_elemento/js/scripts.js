// selecionar elemento
var box = document.getElementById('id');

console.log(box);

// verificar coordenadas e também as posições
var coordenadas = box.getBoundingClientRect();


console.log(coordenadas);

if(coordenadas.x === 25){
    alert('Chegou no 25!');
}