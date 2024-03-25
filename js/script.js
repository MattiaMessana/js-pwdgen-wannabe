// TEST
// alert("ciao");

// Chiediamo dei dati all'utente per generare una password 



// BLOCCO DI RACCOLTA DEI DATI 
// con un propt chiediamo all'utente il suo nome   //quando chiedo dati all'utente di solito sono dati che non voglio cambiare quindi uso const
const userName = prompt("Ciao user! Quale è il tuo nome?"); //string | null
console.log(userName, typeof userName);
// con un propt chiediamo all'utente il suo cognome 
const userSurename = prompt("Ora dimmi il tuo cognome?"); //string | null
console.log(userSurename, typeof userSurename);
// con un propt chiediamo all'utente il suo colore preferito 
const userColor = prompt("Quale è il tuo colore preferito?"); //string | null
console.log(userColor, typeof userColor);
//con math.random generiamo un numero casuale decimale compreso fra 0 a 100 (inclusi) con math.floor genera numeri interi 
const numberCasual = Math.floor(Math.random() * 101); //number
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

