const popUpAboutGame = document.getElementById("popUpAboutGame");
const popUpLevel = document.getElementById("popUpLevel");

function hidePopup() {
    popUpAboutGame.style.display = "none";
}

function showPopupAboutGame() {
    popUpAboutGame.style.display = "grid";
}

function showPopUpLevel() {
    popUpLevel.style.display = "flex";
    console.log("test");
}
function test() {
    console.log("test");
}

function animateHomeScreen() {
    const animationConfig = { duration: 500, fill: "forwards" }
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
