// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferitoInfine scrivi sulla pagina nomecognomecolorepreferito21 
let nomeUtente, cognomeUtente, colorePreferito, password;

nomeUtente = prompt("inserisci nome")
console.log(nomeUtente);

cognomeUtente = prompt("inserisci cognome")
console.log(cognomeUtente);

colorePreferito = prompt("inserisci colore preferito")
console.log(colorePreferito);


password =nomeUtente + cognomeUtente + colorePreferito + 21

console.log(password);

document.getElementById('password').innerHTML = password; 



