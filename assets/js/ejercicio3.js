// Ejercicio 3
const digito1 = document.querySelector("#d1");
const digito2 = document.querySelector("#d2");
const digito3 = document.querySelector("#d3");
const mensaje = document.querySelector("#mensaje");
const button = document.querySelector("#ingresar");

button.addEventListener("click", ()=> {
    // crea la variable que se evaluará
    let pass = digito1.value + digito2.value + digito3.value

    // Genera la condición
    if (pass == "911") {
        mensaje.innerHTML = "Password 1 Correcto"
    } 
    else if (pass == "714" ) {
        mensaje.innerHTML = "Password 2 Correcto"
    }
    else {
        mensaje.innerHTML = "Password Incorrecto"
    }
})