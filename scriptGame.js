const popUp = document.getElementById("popUp");
const popUpGameInformation = document.getElementById("popUpGameInformation");
const isAlreadyOnboardedInGame = localStorage.getItem("isAlreadyOnboardedInGame");
let score = 0;
let clicked = false;
const clickedIds = [];

function onObjectClick(popupId) {
    showPopup(popupId);
    incrementScore(popupId);
}

//Füllt den PopUp mit Inhalt ab 
function showPopup(popupId) {
    const { title, text, textContent, textSource } = popUps[popupId]
    document.getElementById("popUpTitle").textContent = title;
    document.getElementById("popUpWusstestDu").textContent = text;
    document.getElementById("popUpText").textContent = textContent;
    document.getElementById("popUpSource").textContent = textSource;
    popUp.style.display = "grid";
}

if (isAlreadyOnboardedInGame === "true") {
    popUpGameInformation.style.display = "none";
}

function hidePopup() {
    popUp.style.display = "none";
    popUpGameInformation.style.display = "none";
    localStorage.setItem("isAlreadyOnboardedInGame", "true")
}

//Inkrementiert Score, wenn das Objekt noch nicht geklickt wurde
function incrementScore(popupId) {
    if (!clickedIds.includes(popupId)) {
        score += 1;
        document.getElementById("scoreText").innerHTML = "Gefundene Objekte: " + score;
        clickedIds.push(popupId);
    }
}

//Inhalt für die PopUps (Beispiele)
// 1. Bild  2. Titel  3. Text
const popUps = {
    standingDesk: {
        imageUrl: "img/#.png",
        title: "Stehpult zu hoch",
        text: "Wusstest du:",
        textContent: "65% der Menschen mit einer Körperbehinderung haben Probleme, eine Aus- oder Weiterbildung zu machen.",
        textSource: "Inklusionsindex 2023, Studie zur Inklusion von Menschen mit Behinderungen in der Schweiz. Pro Infirmis "
    },
    tuere: {
        imageUrl: "img/#.png",
        title: "Türe zu schwer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet.",
        textContent: "",
        textSource: ""
    },
    whiteboard: {
        imageUrl: "img/#.png",
        title: "Whiteboard",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem!",
        textContent: "",
        textSource: ""
    }
}
