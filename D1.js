/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let datatypeStringa =
  "Un datatype di tipo stringa è una sequenza di caratteri racchiusa tra apici singoli o virgolette. Ad esempio: 'ciao', '123', 'ciao123'.";
console.log(datatypeStringa);

let datatypeNumero =
  "Un datatype di tipo numero è un valore numerico intero. Ad esempio: 5, 10, 15, 20, 25.";
console.log(datatypeNumero);

let datatypeBooleano =
  "Un datatype di tipo booleano è un valore che può essere vero (true) o falso (false).";
console.log(datatypeBooleano);

let datatypeUndefined =
  "Un datatype di tipo undefined è un valore che rappresenta l'assenza di un valore all'interno del nostro data type.";
console.log(datatypeUndefined);

let datatypeNull =
  "Un datatype di tipo null rappresenta un datatype con valore nullo.";
console.log(datatypeNull);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Marcello";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Miranda";
console.log(myName);

const mySurname = "Marcello";
// mySurname = "Rossi"; // Questo genererà un errore perché non è possibile riassegnare un valore ad una variabile dichiarata con const
console.log(mySurname);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 4;
console.log(numero3 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
console.log(name1.toLowerCase() == name2.toLowerCase());
// per quanto riguarda lowerCase ho dovuto ricercare su google cosa fosse in quanto non è stato spiegato a lezione.
