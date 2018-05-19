let colors = [];
let pickedColor;
let numberOfSquares = 6;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDispaly = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#resetButton");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //modeButtons eventListeners 
    setUpModeButtons();
    setUpModeListener();
    reset();  
}

function setUpModeListener() {
    for (let i = 0; i < squares.length; i++) {                                         
        squares[i].addEventListener("click", function () {                                            
            let clickedColor = this.style.background;
            if (clickedColor === pickedColor) {                                                 
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                h1.style.background = clickedColor; 
                changeColors(clickedColor);
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Agen"
            }      
        });
    } 
}

function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }   
}

function reset() {
    colors = generateRendomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDispaly.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }      
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = ""; 
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    for (const square of squares) {
        square.style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRendomColors(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r =  Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return  "rgb(" + r + ", " + g + ", " + b  + ")";
}