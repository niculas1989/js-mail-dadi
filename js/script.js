console.log('JS OK');

// CONSEGNA

/* 

# Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


# Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.


#1 MAIl

1 - creiamo un ARRAY in cui inseriamo un "tot" di email tra le quali dobbiamo cercare.
2 - attraverso un prompt chiediamo all'utente di inserire la sua mail
3 - SE la mail è nella nostra lista, l'utente può accedere e stampiamo un determinato messaggio - ALTRIMENTI ne stampiamo un altro.
*/

const email = ['nicolas.maranzano@libero.it', '@gmail.com', '@yahoo.it', '@libero.it'];

const yourMail = prompt('Scrivi di seguito la tua mail', 'nicolas.maranzano@libero.it');


for (let i = 0; i < email.length; i++) {
    if (yourMail === 0) {
        alert('Il tuo login è andato a buon fine');
    }
    else {
        alert('Il nome utente o la password sono errate');
    }
}






/*
#2 DADI

1 - creare un contatore che permetta di randomizzare i numeri da 1 a 6
2 - farlo per due volte (il randomizzatore)
3 - decreatare quale sia il numero più grande (primo tiro umano, secondo computer)
4 - stampare il tutto in console

5 - e se pareggiano?
*/
