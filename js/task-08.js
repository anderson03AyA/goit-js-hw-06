const form = document.querySelector(".login-form")

form.addEventListener("submit", (Event) => {
  // Evita que la página se recargue al enviar el formulario
    Event.preventDefault();
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    //verificar si los campos estan llenos
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("debe llenar todos los campos.")
        return;
    }
    
    //creamos un objeto con lo0s datos introducidos
    const userData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(userData)
})