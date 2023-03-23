const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");


function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const element = document.createElement("div");
    element.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
    `;
    elements.push(element);
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const botonCreate = document.querySelector(".create");
botonCreate.onclick = () => {
  const amount = Number(controls.querySelector("input").value);
  createBoxes(amount);
};

const botonDelete = document.querySelector(".delete");
botonDelete.onclick = () => {
  destroyBoxes();
}