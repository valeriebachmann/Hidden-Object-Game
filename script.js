const popUp = document.getElementById("popUp");
let score = 0;
let clicked = false;
const clickedIds = [];

function onObjectClick(popupId) {
    showPopup(popupId);
    incrementScore(popupId);
}

function showPopup(popupId) {
    const { title, text } = popUps[popupId]
    document.getElementById("popUpTitle").textContent = title;
    document.getElementById("popUpText").textContent = text;
    popUp.style.display = "grid";
}

function hidePopup() {
    popUp.style.display = "none"
}

function incrementScore(popupId) {
    if (!clickedIds.includes(popupId)) {
        score += 1;
        document.getElementById("scoreText").innerHTML = "Score: " + score;
        clickedIds.push(popupId);
    }
}

const popUps = {
    visual: {
        imageUrl: "img/blind.png",
        title: "Sehbehinderung",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem? Eos, eligendi officiis explicabo temporibus esse hic voluptates corporis aperiam similique deleniti soluta eum tenetur quibusdam voluptate pariatur ea. Aspernatur optio quo pariatur nisi fugiat unde harum inventore. Repudiandae esse impedit quisquam dignissimos omnis, eligendi sed, neque aperiam, ullam iure consequuntur officia aliquid id. Laudantium, voluptatum! Dolorum facilis blanditiis quia eum, aperiam ut quasi repellat possimus reprehenderit sequi perferendis temporibus! Provident illum, odio, necessitatibus in incidunt nisi dignissimos suscipit beatae minima eius dolor tenetur veniam praesentium eos saepe enim ex quaerat libero porro laboriosam consequuntur iste, aspernatur cumque dolorem. Iste illum eveniet error similique pariatur ipsa dignissimos aspernatur ducimus commodi sint, reiciendis quisquam omnis aliquam rem expedita voluptate id autem!"
    },
    physical: {
        imageUrl: "img/blind.png",
        title: "Körperbehinderung",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem? Eos, eligendi officiis explicabo temporibus esse hic voluptates corporis aperiam similique deleniti soluta eum tenetur quibusdam voluptate pariatur ea. Aspernatur optio quo pariatur nisi fugiat unde harum inventore. Repudiandae esse impedit quisquam dignissimos omnis, eligendi sed, neque aperiam, ullam iure consequuntur officia aliquid id. Laudantium, voluptatum! Dolorum facilis blanditiis quia eum, aperiam ut quasi repellat possimus reprehenderit sequi perferendis temporibus! Provident illum, odio, necessitatibus in incidunt nisi dignissimos suscipit beatae minima eius dolor tenetur veniam praesentium eos saepe enim ex quaerat libero porro laboriosam consequuntur iste, aspernatur cumque dolorem. Iste illum eveniet error similique pariatur ipsa dignissimos aspernatur ducimus commodi sint, reiciendis quisquam omnis aliquam rem expedita voluptate id autem. Corporis reprehenderit, blanditiis quibusdam dolor facilis itaque quod fuga earum saepe quo unde nobis facere quaerat, molestias praesentium quis accusamus debitis culpa quae laboriosam dolores incidunt quam libero! Eum pariatur molestias omnis voluptates quas error obcaecati ad natus iusto id, quae quidem corporis, dolor quibusdam minus incidunt illo, ullam iste nam! Suscipit labore inventore ut."
    },
    racism: {
        imageUrl: "img/blind.png",
        title: "Rassismus",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt fuga iste, error nemo libero accusamus ratione sapiente nisi quisquam! Esse excepturi, officiis amet, ut aspernatur eius est distinctio fuga deleniti dolor quaerat voluptatum quidem? Eos, eligendi officiis explicabo temporibus esse hic voluptates corporis aperiam similique deleniti soluta eum tenetur quibusdam voluptate pariatur ea. Aspernatur optio quo pariatur nisi fugiat unde harum inventore. Repudiandae esse impedit quisquam dignissimos omnis, eligendi sed, neque aperiam, ullam iure consequuntur officia aliquid id. Laudantium, voluptatum!"
    }
}
