// TEST
// alert("ciao");

// Chiediamo dei dati all'utente per generare una password 


// BLOCCO DI RACCOLTA DEI DATI 
// con un propt chiediamo all'utente il suo nome
let userName = prompt("Ciao user! Quale è il tuo nome?"); //string
console.log(userName, typeof userName);
// con un propt chiediamo all'utente il suo cognome 
let userSurename = prompt("Ora dimmi il tuo cognome?"); //string
console.log(userSurename, typeof userSurename);
// con un propt chiediamo all'utente il suo colore preferito 
let userColor = prompt("Quale è il tuo colore preferito?"); //string
console.log(userColor, typeof userColor);
//con math.random generiamo un numero casuale compreso fra 1 a 100 inclusi 
let numberCasual = Math.floor((Math.random() * 100) + 1);
console.log(numberCasual, typeof numberCasual);


// PARTE LOGIA 
//devo unire risultati della raccolta dei dati 
const userPassword = userName + userSurename + userColor + numberCasual; //string
console.log(userPassword, typeof userPassword);


// STAMPA DELL'OUTPUT
// stampo risultato del password generetor
// Preparo il messaggio
const resultPassword = ` Ho elaborato la tua password ed è : ${userPassword} `;
console.log(resultPassword); 
// Stampo il messaggio in pagina
document.getElementById("pw").innerHTML = resultPassword;

