var button = document.querySelector("button");

var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Someone clicked the Button!";
}
