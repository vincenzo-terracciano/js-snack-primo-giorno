/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let num = [];

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt("Inserisci un numero"))
    console.log(userNumber);
    if (userNumber % 2 == 0) {
        console.log(`${userNumber} is even`);
    }
    else {
        num.push(userNumber)
        console.log(`${userNumber} is odd`);
        
    }
}
console.log(`${num} are odd`);