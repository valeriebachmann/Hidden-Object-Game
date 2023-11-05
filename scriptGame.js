const popUp = document.getElementById("popUp");
const popUpGameInformation = document.getElementById("popUpGameInformation");
const popUpHelp = document.getElementById("popUpHelp");
const popUpEnd = document.getElementById("popUpEnd");
const popUpFalseClick = document.getElementById("popUpFalseClick");

let fullScore = 26; //temporär fixiert auf 4
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
    document.getElementById("popUpImg").setAttribute("src", imageUrl);
    popUp.style.display = "grid";
}

function showTryAgainPopUp() {
    popUpFalseClick.style.display = "flex";
}

function showHelpPopup() {
    popUpHelp.style.display = "flex";
}

if (isAlreadyOnboardedInGame === "true") {
    popUpGameInformation.style.display = "none";
}

function hidePopup() {
    if (score >= fullScore) {
        popUpEnd.style.display = "flex";
    }
    popUp.style.display = "none";
    popUpGameInformation.style.display = "none";
    popUpHelp.style.display = "none";
    popUpFalseClick.style.display = "none";
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
    tuere: {
        title: "Genau! Das ist Ableismus",
        textContent: "Schmale oder schwere Türen erschweren oder verunmöglichen das Durchkommen für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/iHateDoors.gif"
    },
    stehpult: {
        title: "Genau! Das ist Ableismus",
        textContent: "Ganz richtig! Nicht verstellbare Stehpulte stellen eine Hürde für Personen mit geringer Körpergrösse oder Rollstuhl-Nutzende dar.",
        imageUrl: "img/gif/shelf2.gif"
    },
    barhocker: {
        title: "Genau! Das ist Ableismus",
        textContent: "Ganz richtig! Zu hohe Barhocker stellen eine Hürde für Personen mit geringer Körpergrösse oder Rollstuhl-Nutzende dar.",
        imageUrl: "img/gif/cantsitwithus.gif"
    },
    vorhang: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut erkannt! Mühsam zu schliessende Vorhänge stellen eine Barriere dar und erschweren oder verunmöglichen die Bedienung für Personen mit eingeschränkter Handfunktion.",
        imageUrl: "img/gif/curtain.gif"
    },
    regal1: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/shelf4.gif"
    },
    fernseher: {
        title: "Genau! Das ist Ableismus",
        textContent: "Absolut! Zu hoch platzierte oder schwer bewegliche TVs können die Bedienung und Sicht für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/comingtoyou.gif"
    },
    schiebregal: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut erkannt! Schwere Schiebregale benötigen viel Kraft zum Schieben und zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/heavy.gif"
    },
    steckdose: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau! Zu tief positionierte Steckdosen sind mühsam zu erreichen.",
        imageUrl: "img/gif/lowPowerOutlet.gif"
    },
    lichtschalter: {
        title: "Genau! Das ist Ableismus",
        textContent: "Richtig erkannt! Zu hoch platzierte Schalter sind eine Barriere für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/reach.gif"
    },
    regal2: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/reachit.gif"
    },
    whiteboardstifte: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut beobachtet! Zu hoch platzierte Whiteboard-Stifte erschweren oder verunmöglichen die Nutzung für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/almostthere.gif"
    },
    whiteboardwischer: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut beobachtet! Zu hoch platzierte Whiteboard-Wischer erschweren oder verunmöglichen die Nutzung für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/soclose.gif"
    },
    whiteboard: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut beobachtet! Zu hoch platzierte Whiteboards erschweren oder verunmöglichen die Nutzung für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/jump.gif"
    },
    tische1: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau! Nicht verstellbare Stehpulte stellen eine Hürde für Personen mit geringer Körpergrösse oder Rollstuhl-Nutzende dar.",
        imageUrl: "img/gif/babydesk.gif"
    },
    regal3: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/nottall.gif"
    },
    treppe1: {
        title: "Genau! Das ist Ableismus",
        textContent: "Absolut richtig! Nicht zugängliche Treppen stellen eine erhebliche Barriere für Rollstuhl-Nutzende dar.",
        imageUrl: "img/gif/stair.gif"
    },
    rednerpult: {
        title: "Genau! Das ist Ableismus",
        textContent: "Ganz genau! Nicht verstellbare Rednerpulte können die Nutzung für Rollstuhl-Nutzende oder Personen mit geringer Körpergrösse erschweren oder verunmöglichen.",
        imageUrl: "img/gif/microphone.gif"
    },
    whiteboard2: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut beobachtet! Zu hoch platzierte Whiteboards erschweren oder verunmöglichen die Nutzung für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/microphone.gif"
    },
    //gameMensa.html
    tischeundstuehle: {
        title: "Genau! Das ist Ableismus",
        textContent: "Gut beobachtet! Zu dicht aneinander stehende Tische und Stühle erschweren oder verunmöglichen die Bewegungsfreiheit für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/traffic.gif"
    },
    regal4: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/cantreach.gif"
    },
    essen: {
        title: "Genau! Das ist Ableismus",
        textContent: "Absolut! Zu hoch platzierte Essen auf einem Buffet erschweren oder verunmöglichen den Zugang für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/essen.gif"
    },
    regal5: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/shelf3.gif"
    },
    treppe2: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Das Fehlen eines Lifts oder nicht zugängliche Treppen erschweren oder verunmöglichen den Zugang zu verschiedenen Etagen für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/dogstair.gif"
    },
    wc: {
        title: "Genau! Das ist Ableismus",
        textContent: "Richtig erkannt! Das Fehlen eines Rollstuhl-WCs erschwert oder verunmöglicht die Nutzung der Toilettenanlagen für Rollstuhl-Nutzende.",
        imageUrl: "img/gif/ihavetopee.gif"
    },
    regal6: {
        title: "Genau! Das ist Ableismus",
        textContent: "Genau richtig! Zu hohe Regale können das Erreichen von Gegenständen für Rollstuhl-Nutzende erschweren oder verunmöglichen.",
        imageUrl: "img/gif/alomstthere.gif"
    },
    notausgang: {
        title: "Genau! Das ist Ableismus",
        textContent: "Der Notausgang ist nicht barrierefrei. Menschen mit einer mobilen Einschränkung wird die Evakuierung erschwert oder verunmöglicht.",
        imageUrl: "img/gif/stairfire.gif"
    },
}
