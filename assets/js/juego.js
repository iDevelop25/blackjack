/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */

let         deck = [];
const      tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosMaquina = 0;

//Referencias a los elementos del DOM
const btnPedir = document.querySelector('#btnPedir');
const areaAcumuladoPuntos = document.querySelectorAll('small');

//Esta funcion crea un nuevo deck

const crearDeck = () => {
    for ( let i = 2; i <= 10; i++) {
        for ( let tipo of tipos ) {
            deck.push(i + tipo);
        }
        for ( let tipo of tipos){
            for (let esp of especiales){
                deck.push( esp + tipo );
            }
        }
    }
    deck = _.shuffle(deck);
    return deck;
};

crearDeck();

//Esta funcion me permite sacar una carta del deck

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    deck = deck.slice(carta);
    return carta;
}



const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN ( valor ) ) ?
           ( valor === 'A' ) ? 11 : 10 
           : valor * 1;
}


//Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    console.log(carta);
    console.log(puntosJugador);
    areaAcumuladoPuntos[0].innerHTML = puntosJugador;
});