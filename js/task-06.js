const inputValidation = document.getElementById("validation-input");

inputValidation.addEventListener("blur", validarInput);

function validarInput() {
    const textLength = inputValidation.value.length;
    const requiredLength = inputValidation.getAttribute("data-length");
    //requiredLength es un string hay que parsear
    if (textLength === parseInt(requiredLength)) {
      inputValidation.classList.remove("invalid");
      inputValidation.classList.add("valid");
    } else {
        inputValidation.classList.add("invalid");
        inputValidation.classList.remove("valid");
    }
}