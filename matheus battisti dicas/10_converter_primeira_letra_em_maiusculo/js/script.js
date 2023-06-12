const texto = "CONVERTER ESTE TEXTO PARA MAIÚSCULA SÓ A PRIMEIRA LETRA";
const texto2 = "convertar este texto agora";

function capitalizerFirst(str) {
  const subst = str.toLowerCase().replace(/(?:^|\s)S/g, function(a) {
    return a.toUpperCase();
  });

    return subst;
}

console.log(capitalizerFirst(texto));
console.log(capitalizerFirst(texto2));