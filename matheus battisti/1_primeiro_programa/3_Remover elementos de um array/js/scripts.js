//  -> fim array
let arr = [1,2,3,4,5];
let remover = arr.pop();

console.log(arr);
console.log(remover);

// shift 0> comço da array
let nomes = ["mateua", "João", "Pedro"];
let nome = nomes.shift();

console.log(nome);
console.log(nomes);

// splice -> remover pelo indice do el
let numbers = [1, 2, 3, 4, 5];
let number = numbers.splice(1, 1);

console.log(number);
console.log(numbers);

let subarray = numbers.splice(0, 3);

console.log(subarray);
console.log(numbers);