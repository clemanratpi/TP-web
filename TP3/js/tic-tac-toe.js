'use strict';

/* CONSTANTES */

let MESSAGES = {
    message1: 'Bienvenue sur notre jeu.',
    message2: ' vous avez gagné !'
};

const PLAYER1 = "✔";
const PLAYER2 = "✗";

/* VARIABLES GLOBALES */

let start; // date de début de partie
let timerInterval;

/* MAIN */

function main() {

    // Message de bienvenue
    console.log(MESSAGES.message1);
    alert(MESSAGES.message1);

    // Ajout des événements sur les 9 cases
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById("cell" + i);
        cell.addEventListener("click", fill);
    }

    // Bouton vérifier
    document.getElementById("play").addEventListener("click", verify);

    // Timer
    start = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

/* REMPLISSAGE DES CASES */

function fill(event) {

    console.log(event.target);

    if (event.target.innerHTML === "" || event.target.innerHTML === PLAYER2) {
        event.target.innerHTML = PLAYER1;
        event.target.style.color = "green";
    } else {
        event.target.innerHTML = PLAYER2;
        event.target.style.color = "red";
    }
}

/* VÉRIFICATION GAGNANT */

function verifyPlayer(playerMark) {

    const c = [];
    for (let i = 0; i < 9; i++) {
        c[i] = document.getElementById("cell" + i).innerHTML;
    }

    // Lignes
    if (c[0] === playerMark && c[1] === playerMark && c[2] === playerMark) return true;
    if (c[3] === playerMark && c[4] === playerMark && c[5] === playerMark) return true;
    if (c[6] === playerMark && c[7] === playerMark && c[8] === playerMark) return true;

    // Colonnes
    if (c[0] === playerMark && c[3] === playerMark && c[6] === playerMark) return true;
    if (c[1] === playerMark && c[4] === playerMark && c[7] === playerMark) return true;
    if (c[2] === playerMark && c[5] === playerMark && c[8] === playerMark) return true;

    // Diagonales
    if (c[0] === playerMark && c[4] === playerMark && c[8] === playerMark) return true;
    if (c[2] === playerMark && c[4] === playerMark && c[6] === playerMark) return true;

    return false;
}

/* VÉRIFICATION PARTIE */

function verify() {

    let name1 = document.getElementById("player1").value;
    let name2 = document.getElementById("player2").value;

    if (verifyPlayer(PLAYER1)) {
        alert("Bravo " + name1 + MESSAGES.message2);
        addScore(name1);
        resetBoard();
    } 
    else if (verifyPlayer(PLAYER2)) {
        alert("Bravo " + name2 + MESSAGES.message2);
        addScore(name2);
        resetBoard();
    } 
    else {
        alert("Personne n'a encore gagné.");
    }
}

/* RESET PLATEAU */

function resetBoard() {
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById("cell" + i);
        cell.innerHTML = "";
        cell.style.color = "black";
    }

    start = new Date(); // relance timer
}

/* SCORES */

function addScore(name) {

    let table = document.getElementById("scores");
    let row = table.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellDate = row.insertCell(1);

    cellName.innerHTML = name;
    cellDate.innerHTML = new Date().toLocaleString();
}

/* TIMER */

function updateTimer() {

    let now = new Date();
    let diff = Math.floor((now - start) / 1000);

    let minutes = Math.floor(diff / 60);
    let seconds = diff % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

/* LANCEMENT */

main();
