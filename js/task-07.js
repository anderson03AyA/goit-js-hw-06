const input = document.getElementById("font-size-control");
const textSpan = document.getElementById("text")

input.addEventListener("input", textSize);
textSpan.style.display = "flex"

function textSize() {
    textSpan.style.fontSize = `${input.value}px`;
}