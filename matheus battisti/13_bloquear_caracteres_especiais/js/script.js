const brandInput = document.querySelector("#brand");

brandInput.addEventListener("Keypress", function(e) {

   if(!checkChar(e)) {
    e.preventDefault();
   }

});

function checkChar(e) {

    const char = String.fromCharCode(e.KeyCode)

    const pattern = '[a-zA-Z0-9]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }
}