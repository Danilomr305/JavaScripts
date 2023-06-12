var desc = document.querySelector("#descricao");

console.log(desc);

desc.addEventListener("keypress", function(e) {
    
    const inputLength = desc.Value.length;
    const maxChars = 20;

    if(inputLength >= maxChars) {
        e.preventDefault();
        console.log("Máximo aceito 20 0digitos");

    }


});