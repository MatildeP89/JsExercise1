//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* function findMax(a, b) {

    if (a > b) {
        console.log(a + " è maggiore di " + b);
    }

    else if (b > a) { console.log(b + " è maggiore di " + a); 

    }

    else { console.log("I numeri sono uguali"); }

}

findMax(5, 7)
findMax(2,9)
findMax(10,6)


*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"


    let num=5
  if (num < 5) {console.log("Tiny") }
  else if (num<10) {console.log("Small")}
  else if (num<15) {console.log("Medium")}
  else if (num<20) {console.log("Large")}
  else if (num<=20) {console.log("Huge")}



*/




//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* for (let numero=0; numero<11; numero++) {
    if (numero === 3) {continue;}    
    else if (numero === 8) {continue;}

    console.log (numero);
  
  }
 */





/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 

for (let a=0; a<16; a++) {

  if (a % 2 === 0 ) {console.log(a+ " è pari ")}
  else {console.log(a+ " è dispari ")}
}

*/





//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let num1=5
let num2=4

if(num1 === 8 || num2=== 8) {console.log("uno dei due valori è otto")
}

else if (num1-num2===8 || num2-num1 === 8) {console.log("la sottrazione dei numeri è pari a 8")

}

else if (num1+num2===8) {console.log("l'addizione dei numeri è pari a 8")}

else {console.log("nessuno dei numeri forniti è uguale ad otto, nè la loro addizione o sottrazione")} */



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart= 40


if (totalShoppingCart>50 ) {console.log("Total amount to pay is " + totalShoppingCart)
}

else {totalShoppingCart = totalShoppingCart + 10
  
  console.log("Total amount to pay is " + totalShoppingCart)}

 */



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/





/* 
let discount = 0.20
let totalShoppingCart= totalShoppingCart - (totalShoppingCart*discount)

if (totalShoppingCart>50) {console.log("Total amount to pay is " + totalShoppingCart)
}

else {totalShoppingCart = totalShoppingCart + 10
  
  console.log("Total amount to pay is " + totalShoppingCart)}

  */



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* let isMale = true;

let result = isMale ? "male" : "female";

console.log(result); */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


/*for (let z=1; z<=100; z++) {
  if (z%3===0 && z%5===0) {console.log("FizzBuzz") }
else if (z%5===0) {console.log("Buzz")}
else if (z%3===0) {console.log("Fizz") }
else {console.log(z)};
} */


