console.log('JS OK');

/*
# Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.



#2 DADI

1 - creare un contatore che permetta di randomizzare i numeri da 1 a 6
2 - farlo per due volte (il randomizzatore)
3 - decreatare quale sia il numero più grande (primo tiro umano, secondo computer)
4 - stampare il tutto in console

5 - e se pareggiano?
*/


const resultHumanElement = document.getElementById('human-result');
const randomUmanNumber = parseInt(Math.round(Math.random() * 5) + 1);
console.log(randomUmanNumber);
resultHumanElement.innerText = randomUmanNumber;



const resultComputerElement = document.getElementById('pc-result');
const randomComputerNumber = parseInt(Math.round(Math.random() * 5) + 1);
console.log(randomComputerNumber);
resultComputerElement.innerText = randomComputerNumber;


const resultFinalElement = document.getElementById('final-result');
let result = '';
if (randomUmanNumber > randomComputerNumber) {
    console.log("Ha vinto l'umano!");
    result = "Ha vinto l'umano!";
} else if (randomUmanNumber == randomComputerNumber) {
    console.log('Avete pareggiato!');
    result = "Avete pareggiato!";
} else {
    console.log("Ha vinto il computer!");
    result = "Ha vinto il computer!";
}

resultFinalElement.innerText = result;





