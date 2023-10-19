const popUpStartExplanation = document.getElementById("popUpStartExplanation");
const isAlreadyOnboarded = localStorage.getItem("isAlreadyOnboarded");

if (isAlreadyOnboarded === "true") {
    popUpStartExplanation.style.display = "none";
}

function hidePopup() {
    popUpStartExplanation.style.display = "none";
    localStorage.setItem("isAlreadyOnboarded", "true")
}

