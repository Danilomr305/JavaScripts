//Arrow Function

// (a, b) => {
//    return a + b;
// }

// (a, b) => a+ b;

let a = 5;
 let b = 10;

 let c = (num1, num2) => num1 + num2; 

 console.log(c(a, b));

 let d = (x, y) => {

    let op;

 if(x > 5) {
   op = x * y;
 }else {
    op = x / y;
 }

 return op;

}

console.log(d(a, b));

// um argumento
let frase = "O Danilo é um ótimo dev";

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));

// sem arg
let semARG = () => console.log('Não tenho argumento');

semARG();

// Casos de uso
let roupas = [
   {produto: 'Camisa', preco:25, cor: 'Amarelo'},
   {produto: 'Calça', preco:80, cor: 'Azul'},
   {produto: 'Jaqueta', preco:100, cor: 'Preto'},
   {produto: 'Camiseta', preco:15, cor: 'Rosa'},
   {produto: 'Calção', preco:20, cor: 'Azul'},
];

let precoMaiorQue50 = roupas.filter((roupa) => {
   return roupa.preco >= 50;
});

console.log(precoMaiorQue50);

setTimeout(() => {
   console.log("Deu tempo!");
}, 150);

// NÃO USAR ARROW

let pessoa = {
   namo: "Danilo",
   sayName: () => {
      console.log(this.name);
   }
}

pessoa.sayName();

let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', () => {
   this.classList.toggle('classe');
});
