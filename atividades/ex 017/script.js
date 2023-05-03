 window.alert('Boa Tarde!')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 14) {
                /*criança*/
                img.setAttribute('src', 'criança-menino.jpg')
            } else if (idade < 23) {
                /*jovens*/
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if (idade < 65) {
                /*adulto*/
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                /*idoso*/
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 14) {
                    /*criança*/
                    img.setAttribute('src', 'criança-menina.jpg')
            } else if (idade < 23) {
                    /*jovens*/
                    img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade < 65) {
                    /*adulta*/
                    img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                    /*idosa*/
                    img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild (img)
    }
}