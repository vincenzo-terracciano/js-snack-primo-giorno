/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const userNumber = Number(prompt("Inserisci un numero"));
const userNumberAgain = Number(prompt("Inserisci un altro numero"));

if (userNumber > userNumberAgain) {
    console.log(userNumber);
} else if (userNumberAgain > userNumber) {
    console.log(userNumberAgain);
} else if (userNumber === userNumberAgain) {
    console.log(userNumber, userNumberAgain);
    
}