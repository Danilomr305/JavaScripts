var idade =66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não votar')
} else {
    if (idade >= 16 && idade < 18 || idade > 65){
       console.log('voto opcional')
   } else {
       if (idade >= 18) {
           console.log('Voto Obrigatorio')
       }
   }
}