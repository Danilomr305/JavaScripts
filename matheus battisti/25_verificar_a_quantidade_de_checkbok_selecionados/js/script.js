var checkBoxes = document.querySelectorAll(".ckeckbox");

var selecionados = 0;

var btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    selecionados = 0;

    checkBoxes.forEach(function(el) {

        if(el.checked) {
            selecionados++;
        }

    });

    console.log(selecionados);

});