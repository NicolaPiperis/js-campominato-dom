// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

    // DICHIARAZIONI VARIABILI GLOBALI

        // CONTENITORE
    let container = document.getElementById("container");
    console.log(container);

        // VOLORE SCELTO DIFFICOLTA'
    let difficulty = document.getElementById("select_difficulty").value;
    console.log(difficulty);
   
        // SELEZIONIAMO DA JS IL BOTTONE PLAY
    let play = document.getElementById("play");
    console.log(play);

    

    // AGGIUNGO AL CLICK DELLA VARIABILE PRECEDENTEMENTE SELEZIONATA UNA SERIE DI COMPORTAMENTI 
    play.addEventListener("click",
        function(){

            // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
            let arraybomb = randomBombPosition ();
            console.log(arraybomb);

            // DICO CHE AD OGNI CLICK LA PAGINA SI SVUOTA PER POI RIEMPIRSI SUCCESSIVAMENTE COL FOR
            container.innerHTML = "";

            // GENERAZIONE CELLE / ATTRAVERSO UN CICLO PER RIPETERE LA CREAZIONE DELLE CELLE QUANTE VOLTE BASTA
            for (let i = 1; i < 101 ; i++) {

                // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
                let squareElement = createElement("div", "square") ;
                container.append(squareElement);

                // Ogni cella ha un numero progressivo, da 1 a 100.
                squareElement.append(i);

                // FUNZIONE DI BACKGROUND COLOR AL CLICK DELLE CELLE
                squareElement.addEventListener("click",
                    function(){
                        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
                        squareElement.classList.add("cell_clicked")
                        console.log(i);
                    }
                )
            }

            

            

    
        }
    )

    


   

    
    
    // In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    // Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
    // La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.





// FUNZIONI

// CREO ELEMENTO E AGGIUNGO UNA CLASSE
function createElement (tag, addClass){

    let newElement = document.createElement(tag);
    newElement.classList.add(addClass);
    return newElement;

}

// generare numeri casuali da 1 a numero massimo celle

function randomBomb (min, max) {
    let bomb = Math.floor( Math.random () * ( max - min + 1 ) - min ) ;
    return bomb ;
}

// genero una posizione random nel range delle celle 16 volte

function randomBombPosition () {

    // array vuoto dove veranno aggiunti i le posizioni delle bombe per 16 volte(quantità bombe)
    let intArray = [];

    // faccio generare numeri random per 16 volte con un ciclo
    for (let i = intArray.length; intArray.length < 16 ; i++) {
        let newNumber = randomBomb(1,100);

        // SE IL NUMERO GENERATO NON E' ANCORA STATO INTRODOTTO NELL'ARRAY, VERRA' FATTO, ALTRIMENTI GLI VERRA' NEGATO L'ACCESSO
        // Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
        if(!intArray.includes(newNumber)) {
            intArray.push(newNumber);
        }

        
    }
    return intArray;
}

















