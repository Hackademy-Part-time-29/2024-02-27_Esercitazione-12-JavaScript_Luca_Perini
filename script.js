//ESERCIZIO 1

let elenco = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

elenco.sort((a, b) => b - a)
console.log(elenco);
elenco.sort((a, b) => a - b)
console.log(elenco);

//ESERCIZIO 2

let elenco2 = [6, 8, 56, 23, 45, 67, 82, 12, 12, 32]
console.log("L'elenco è composto dai seguenti numeri:" + elenco2);
let somma = elenco2.reduce((acc, n) => acc + n)
media = somma / elenco.length
numeriMinori = elenco2.filter((number) => number < media)
totalenumeriMinori = numeriMinori.length;
numeriMaggiori = elenco2.filter((number) => number > media)
totalenumeriMaggiori = numeriMaggiori.length;
console.log("La media è " + media + ", i valori minori sono " + numeriMinori + ", per un totale di " + totalenumeriMinori + ". I valori maggiori sono " + numeriMaggiori + ", per un totale di " + totalenumeriMaggiori + ".");

//ESERCIZIO 3

function frasePalindroma(frase) {
    let str = frase
    let splitter = str.replace(/\W/g, "")
    elencoLettere = splitter.split(``)
    let palindromo = elencoLettere.reverse()
    let palindromo2 = elencoLettere.reduce((acc, n) => acc + n)



    if (splitter == palindromo2) {
        console.log("Parola palindroma!");
    } else {
        console.log("Parola non palindroma!");
    }
}

frasePalindroma("mattone");