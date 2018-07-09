let firstLi = document.querySelectorAll("li");

for (let firstLis of firstLi) {
    firstLis.addEventListener("mouseover", function () {
        this.style.color = "green"; 
    });
    firstLis.addEventListener("mouseout", function () {
        this.style.color = "black"
    });
    firstLis.addEventListener("click", function () {
        this.classList.toggle("done");
    });
    firstLis.addEventListener("mouseover", function () {
        this.classList.toggle("selected");
    })

}

