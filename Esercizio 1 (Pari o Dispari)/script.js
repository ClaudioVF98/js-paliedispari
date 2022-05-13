const risultato = document.getElementById("risultato");

// Chiediamo all'utente se vuole i numeri pari o dispari
const domandaPariDispari = prompt("Pari o Dispari?")
console.log(domandaPariDispari);

// Chiediamo all'utente un numero compreso tra 1 e 5
const domandaNumero = prompt("Scegli un numero da 1 a 5")
console.log((domandaNumero));

// Generiamo un numero random con una funzione
const numeroRandom = randomNum();
console.log(numeroRandom);

function randomNum () {
    let result = Math.floor((Math.random() * 5) +1);
    return result;
}

// Sommiamo il numero random e il numero scelto
const somma = domandaNumero + numeroRandom;
console.log(somma);

// Definiamo Pari e dispari
function distinzione (arg) {
    if (arg % 2 === 0) {
        return ("Pari");
    } else {
        return ("Dispari")
    }
}

const confronto = distinzione(somma);
console.log(confronto);

// Vincitore
if (domandaPariDispari === confronto) {
    risultato.innerHTML = "Hai vinto"
} else {
    risultato.innerHTML = "Hai perso"
}
