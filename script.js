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
    const { title, text } = popUps[popupId]
    document.getElementById("popUpTitle").textContent = title;
    document.getElementById("popUpText").textContent = text;
    popUp.style.display = "grid";
}

function hidePopup() {
    popUp.style.display = "none"
}

//Inkrementiert Score, wenn das Objekt noch nicht geklickt wurde
function incrementScore(popupId) {
    if (!clickedIds.includes(popupId)) {
        score += 1;
        document.getElementById("scoreText").innerHTML = "Score: " + score + " / 10";
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
        title: "Stehpult",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem? Eos, eligendi officiis explicabo temporibus esse hic voluptates corporis aperiam similique deleniti soluta eum tenetur quibusdam voluptate pariatur ea. Aspernatur optio quo pariatur nisi fugiat unde harum inventore. Repudiandae esse impedit quisquam dignissimos omnis, eligendi sed, neque aperiam, ullam iure consequuntur officia aliquid id. Laudantium, voluptatum! Dolorum facilis blanditiis quia eum, aperiam ut quasi repellat possimus reprehenderit sequi perferendis temporibus! Provident illum, odio, necessitatibus in incidunt nisi dignissimos suscipit beatae minima eius dolor tenetur veniam praesentium eos saepe enim ex quaerat libero porro laboriosam consequuntur iste, aspernatur cumque dolorem. Iste illum eveniet error similique pariatur ipsa dignissimos aspernatur ducimus commodi sint, reiciendis quisquam omnis aliquam rem expedita voluptate id autem!"
    },
    tuere: {
        imageUrl: "img/#.png",
        title: "Türe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet."
    },
    whiteboard: {
        imageUrl: "img/#.png",
        title: "Whiteboard",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem!"
    }
}
