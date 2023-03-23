function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const boton = document.querySelector("button");
const span = document.querySelector(".color");

boton.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
})