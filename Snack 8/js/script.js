// Snack8 
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.


const snack8 = document.getElementById('snack8');
const divPari = document.createElement('div');
snack8.appendChild(divPari);
divPari.classList.add("verdi");



const divDispari = document.createElement('div');
snack8.appendChild(divDispari);
divDispari.classList.add("rossi");
