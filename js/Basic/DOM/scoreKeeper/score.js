const p1button = document.querySelector(".b1");
const p2button = document.querySelector(".b2");
const p3button = document.querySelector(".b3");
const p1span = document.querySelector("#s1");
const p2span = document.querySelector("#s2")
const p3spanDisplay = document.querySelector("p span");
let winningScore = 5;
let p1Scoer = 0;
let p2Score = 0;
let p3Input = 0;
let gameOver = false;
let gameNumber = document.querySelector("input");

p1button.addEventListener("click", function () {
    if (!gameOver) {
        p1Scoer++;
        if (p1Scoer === winningScore) {
            p1span.classList.add("winner")
            gameOver = true;
        }
        p1span.textContent = p1Scoer;
    }
});

p2button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2span.classList.add("winner")
            gameOver = true;
        }   
        p2span.textContent = p2Score;
    }

});

p3button.addEventListener("click", function () {
    reset();
});

gameNumber.addEventListener("change", function () {
    p3spanDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});


function reset() {
    p1Scoer = 0;
    p2Score = 0;
    p1span.textContent = 0;
    p2span.textContent = 0;
    p1span.classList.remove("winner");
    p2span.classList.remove("winner");
    gameOver = false;
};

