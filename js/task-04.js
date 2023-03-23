let counterValue = 0;
const botones = document.querySelectorAll(".button");
const span = document.getElementById("value")
botones.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "increment") {
      counterValue++;
    } else if (action === "decrement") {
      counterValue--;
    }
    span.textContent = counterValue;
  });
});
