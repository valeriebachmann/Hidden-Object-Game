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

function animateHomeScreen() {
    const animationConfig = { duration: 300, fill: "forwards" }
    const gameTitle = document.getElementById("gameTitle");
    const blueButtonGroup = document.getElementById("homeScreenBlueButtonGroup");
    const startGameButtonText = document.getElementById("startGameButtonText");
    const infoGebaeude = document.getElementById("infoGebaeude");
    const image1 = document.getElementById("image1");
    const indexButton = document.getElementById("indexButton")


    startGameButtonText.animate([{ transform: "translateY(-100vh)" }], animationConfig)
    gameTitle.animate([{ opacity: 0 }], animationConfig)
    blueButtonGroup.animate([{
        transform: "translateY(100vh)"
    }], animationConfig)
    infoGebaeude.animate([{ opacity: 1 }], animationConfig)
    image1.animate([{ opacity: 0 }], animationConfig)
    setTimeout(() => {
        indexButton.style.display = "none"
        gameTitle.style.display = "none"
        image1.style.display = "none"
    }, animationConfig.duration);

}
