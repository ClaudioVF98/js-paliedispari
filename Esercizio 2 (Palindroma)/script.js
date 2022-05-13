// Inseriamo una parola
const parola = prompt("Inserisci una parola")

// Appuriamo se sia palindroma o no
function palindroma (parola) {
    const parolaContraria = parola.split("").reverse().join("");

    if (parolaContraria === parola) {
        return ("vero");
    } else {
        return ("falso");
    }
}

console.log(palindroma (parola));