const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++){
  const newLi = document.createElement("li");
  newLi.textContent = ingredients[i];
  newLi.classList.add("item")
ul.appendChild(newLi);
}