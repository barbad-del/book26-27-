// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

// Selezioniamo gli elementi dal DOM
const inputItem = document.getElementById('item');
const btnAggiungi = document.getElementById('btn-aggiungi');
const lista = document.getElementById('lista');
const errore = document.getElementById('errore');

function aggiungiElemento() {
    const testo = inputItem.value.trim(); // .trim() evita che spazi vuoti contino come testo valido
    
    if (testo === "") {
        errore.textContent = "Errore: il campo non può essere vuoto!";
        return;
    }
    
    errore.textContent = "";

    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = testo;

    // Creiamo il bottone Rimuovi
    const buttonRimuovi = document.createElement("button");
    buttonRimuovi.textContent = "Rimuovi";
    
    buttonRimuovi.addEventListener("click", function(event) {
        // Rimuove il genitore del bottone (cioè il tag <li>)
        event.target.parentElement.remove();
    });

    // Mettiamo il bottone dentro il nuovo <li>
    nuovoItem.appendChild(buttonRimuovi);

    // Mettiamo il <li> dentro la lista
    lista.appendChild(nuovoItem);

    // Svuotiamo l'input
    inputItem.value = "";
}

btnAggiungi.addEventListener("click", aggiungiElemento);

// (Opzionale) Permetti di aggiungere premendo Invio
inputItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        aggiungiElemento();
    }
});