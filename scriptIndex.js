const popUpStartExplanation = document.getElementById("popUpStartExplanation");
const isAlreadyOnboardedInIndex = localStorage.getItem("isAlreadyOnboardedInIndex");

if (isAlreadyOnboardedInIndex === "true") {
    popUpStartExplanation.style.display = "none";
}

function hidePopup() {
    popUpStartExplanation.style.display = "none";
    localStorage.setItem("isAlreadyOnboardedInIndex", "true")
}

