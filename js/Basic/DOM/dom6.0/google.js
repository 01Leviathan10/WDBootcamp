const element = document.querySelector("button");
const paragraph = document.querySelector("p");

element.addEventListener("click", function () {
    paragraph.textContent = "Marko Car!";
});