var agora = new Date()
var  diaSem = agora.getDay()
/* 
DOMINGO = 0
SEGUNDA = 1
 TERÇA = 2
QUARTA = 3
QUINTA = 4
SEXTA = 5
SABADO = 6
*/
console.log (diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}
