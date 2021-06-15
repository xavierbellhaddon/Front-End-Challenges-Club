const progress = document.getElementById("progress");
const buttonText = document.querySelector(".button-text");
let i = 0;
let width = 0;

const increment = () => {
    if (i === 0) {
        const id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                width = 0;
                console.log(buttonText.innerHTML)
            } else {
                width++;
            }
            progress.style.width = width + "%";
        }
    }
}

document.querySelector("button").addEventListener("click", () => {
    increment();
});