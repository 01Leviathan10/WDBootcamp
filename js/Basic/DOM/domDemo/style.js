var element0 = document.getElementsByTagName("p");

var element1 = document.querySelector("ul").addEventListener("click", function () {
    console.log("U clicked the ul!")
});

var element2 = document.querySelector("h1");

var element3 = document.querySelectorAll("li");

// element1.textContent = " Corgi mixes are rally realy super adorable";

// element1.innerHTML = " Play with me!"; 

element2.addEventListener("click", function () {
    alert("h1 was clicked!");
    element2.style.background = "orange";
});

for (const elements of element3) {
    elements.addEventListener("click", function () {
        this.style.color = "pink";
    });
};