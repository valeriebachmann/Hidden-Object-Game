const popUpStartExplanation = document.getElementById("popUpStartExplanation");
const popUpAboutGame = document.getElementById("popUpAboutGame");
const isAlreadyOnboardedInIndex = localStorage.getItem("isAlreadyOnboardedInIndex");

if (isAlreadyOnboardedInIndex === "true") {
    popUpStartExplanation.style.display = "none";
}

function hidePopup() {
    popUpStartExplanation.style.display = "none";
    popUpAboutGame.style.display = "none";
    localStorage.setItem("isAlreadyOnboardedInIndex", "true")
}

function showPopup() {
    popUpAboutGame.style.display = "grid";
}
function test() {
    console.log("test");
}

