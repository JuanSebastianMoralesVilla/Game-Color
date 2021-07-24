var squares = document.querySelectorAll(".square"); // document.getElementByClassName
var colors = []
var pickedColor;
var displayColor = document.getElementById("displayColor");
var message = document.querySelector("#message");
var num = 6;
var resetBtn = document.getElementById("reset");
var modeBt = document.querySelectorAll(".mode")

resetBtn.addEventListener("click", reset);

function setupSquares() {

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                changeColors(clickedColor);
                message.textContent = "CORRECTO";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "INTENTA DE NUEVO";
            }
        })
    }
}

function setupButtons() {
 for (let i = 0; i < modeBt.length; i++)
        modeBt[i].addEventListener("click", function () {
            modeBt[0].classList.remove("selected");
            modeBt[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "NOVATO" ? num = 3 : num = 6;
            reset()
        });
}

function changeColors(color) {

    let h1 = document.querySelector("h1");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
}
    h1.style.backgroundColor = color;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
 

    return "rgb(" + r + ", " + g + ", " + b + ")" 
}

function generateRandomColors(num) {
 var array = []
    for (let i = 0; i < num; i++)
        array.push(randomColor())
    return array;

}

function pickedColorRandom() {
    let p = Math.floor(Math.random() * colors.length)
    return colors[p];
}

function reset() {
    colors = generateRandomColors(num);
    pickedColor = pickedColorRandom();
    displayColor.textContent = pickedColor;
    console.log(colors)
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block"
        } else {
            squares[i].style.display = "none"
        }
    }
}


reset();
setupSquares();
setupButtons();
