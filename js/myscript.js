function numeri(numeri) {
    let sequenzanumeri = [];
    for (let i = 0; i <= numeri; i++) {
        sequenzanumeri[i] = Math.floor(Math.random() * 9);
    }
    return sequenzanumeri;
}

let tempo;
let button = document.getElementById("button");
let numbers = document.querySelector(".sequenza");
let countdown = document.querySelector(".countdownnone");
let inputsequenza = document.querySelector(".inputsequenza");
let invio = document.querySelector(".invianone");
let risultato = document.querySelector(".risultatonone");

button.addEventListener("click", numericlick);

function numericlick() {
    let sequenza = numeri(4);
    let sequenzasplit = sequenza.toString();
    let secondi = 31;
    console.log(sequenzasplit);

    numbers.classList.toggle("sequenzablock");
    document.querySelector(".sequenza").innerHTML = sequenzasplit;


    tempo = setInterval(
      function () {
        secondi--;
        countdown.classList.add("countdown");
        countdown.innerHTML = secondi;
        if (secondi === 0) {
            clearInterval(tempo);
            countdown.classList.remove("countdown");
            numbers.classList.remove("sequenzablock");
            inputsequenza.classList.add("inputsequenzablock");
            invio.classList.add("invia");
        }

        
        invio.addEventListener("click",
            function () {
                let inputsequenzalog = inputsequenza.value;
                console.log(inputsequenzalog);
                if (inputsequenzalog == sequenzasplit) {
                    inputsequenza.classList.remove("inputsequenzablock");
                    risultato.classList.add("risultato");
                    risultato.innerHTML = "Hai scritto la sequenza correttamente bravooo!!"
                } else {
                    inputsequenza.classList.remove("inputsequenzablock");
                    risultato.classList.add("risultato");
                    risultato.innerHTML = "Ma che brutta memoria dai impegnati un pó di piú su"
                }
            }
        );
    }, 1000);

        
}
