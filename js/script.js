console.log('JS OK');

// CONSEGNA

/* 

# Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


#1 MAIl

1 - creiamo un ARRAY in cui inseriamo un "tot" di email tra le quali dobbiamo cercare.
2 - attraverso un prompt chiediamo all'utente di inserire la sua mail
3 - SE la mail è nella nostra lista, l'utente può accedere e stampiamo un determinato messaggio - ALTRIMENTI ne stampiamo un altro.
*/

// const email = ['nicolas.maranzano@libero.it', '@gmail.com', '@yahoo.it', '@libero.it'];

// const yourMail = prompt('Scrivi di seguito la tua mail', 'nicolas.maranzano@libero.it');


// for (let i = 0; i < email.length; i++) {
//     if (yourMail === 0) {
//         alert('Il tuo login è andato a buon fine');
//     }
//     else {
//         alert('Il nome utente o la password sono errate');
//     }
// }


const email = ['nicolas.maranzano@libero.it', 'gino@gmail.com', 'pippo@yahoo.it'];
let yourMail = prompt("Scrivi di seguito la tua mail", 'nicolas.maranzano@libero.it');

for (let i = 0; i < email.length; i++) {
    switch (email) {
        case 'nicolas.maranzano@libero.it':
            alert("Login effettuata con successo");
            break;
        default:
            alert("Nome utente o password non corrette");
    }
}


