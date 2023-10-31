const popUp = document.getElementById("popUp");
const popUpGameInformation = document.getElementById("popUpGameInformation");
const popUpHelp = document.getElementById("popUpHelp");
const popUpEnd = document.getElementById("popUpEnd");

let fullScore = 4; //temporär fixiert auf 4
let clicked = false;
const clickedIds = JSON.parse(localStorage.getItem("clickedIds") || "[]");

const isAlreadyOnboardedInGame = localStorage.getItem("isAlreadyOnboardedInGame");
let score = Number(localStorage.getItem("score")) || 0; /* gespeicherter Score anzeigen, ausser es ist NULL, dann wird 0 angezeigt*/


// initially set score, otherwise score will be 0 (as defined in gameMensa.html) until a new object is found
document.getElementById("scoreText").innerHTML = "Gefundene Objekte: " + score;

function onObjectClick(popupId) {
    showPopup(popupId);
    incrementScore(popupId);
}

//Füllt den PopUp mit Inhalt ab 
function showPopup(popupId) {
    const { title, textContent, imageUrl } = popUps[popupId]
    document.getElementById("popUpTitle").textContent = title;
    document.getElementById("popUpText").textContent = textContent;
    document.getElementById("popUpImg").textContent = imageUrl;
    popUp.style.display = "grid";
}

function showHelpPopup() {
    popUpHelp.style.display = "grid";
}

if (isAlreadyOnboardedInGame === "true") {
    popUpGameInformation.style.display = "none";
}

function hidePopup() {
    if (score >= fullScore) {
        popUpEnd.style.display = "grid";
    }
    popUp.style.display = "none";
    popUpGameInformation.style.display = "none";
    popUpHelp.style.display = "none";
    localStorage.setItem("isAlreadyOnboardedInGame", "true")
}

//Inkrementiert Score, wenn das Objekt noch nicht geklickt wurde
function incrementScore(popupId) {
    if (!clickedIds.includes(popupId)) {
        score += 1;
        localStorage.setItem("score", score);
        document.getElementById("scoreText").innerHTML = "Gefundene Objekte: " + score;
        clickedIds.push(popupId);
        localStorage.setItem("clickedIds", JSON.stringify(clickedIds));
    }
}

//Inhalt für die PopUps 
// 1. Bild  2. Titel  3. Text
const popUps = {
    //game.html
    standingDesk: {
        title: "Genau! Das ist Ableismus",
        textContent: "Schmale oder schwere Türen erschweren oder verunmöglichen das Durchkommen für Rollstuhl-Nutzende.",
        imageUrl: "img/iHateDoors.gif"
    },
    tuere: {
        title: "Türe zu schwer",
        textContent: "",
        imageUrl: "img/#.png"
    },
    whiteboard: {
        title: "Whiteboard",
        textContent: "",
        imageUrl: "img/#.png"
    },
    //gameMensa.html
    shelf: {
        title: "Shelf",
        textContent: "",
        imageUrl: "img/#.png"
    }
}
