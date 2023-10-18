const popUp = document.getElementById("popUp");
const progress = document.querySelector(".progressBarWithScore");
let score = 0;
let clicked = false;
const clickedIds = [];

function onObjectClick(popupId) {
    showPopup(popupId);
    incrementScore(popupId);
    incrementProgressBarWidth();
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

function hidePopup() {
    popUp.style.display = "none"
}

//Inkrementiert Score, wenn das Objekt noch nicht geklickt wurde
function incrementScore(popupId) {
    if (!clickedIds.includes(popupId)) {
        score += 1;
        document.getElementById("scoreText").innerHTML = "Gefundene Objekte: " + score;
        clickedIds.push(popupId);
    }
}

// 10: Beispiel max. 10 Objekte zu finden
function incrementProgressBarWidth() {
    progress.style.width = `${(score / 10) * 100}%`;
    progress.innerText = `${Math.ceil((score / 10) * 100)}%`;
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
