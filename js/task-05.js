const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", actualizarSaludo);

function actualizarSaludo() {
    const nombre = nameInput.value;
    //si el nombre es null nos retorna false por lo que se ejecuta anonymous
    nameOutput.textContent = nombre ? nombre : "Anonymous";
}