// Ejercicio 1
const img = document.querySelector("#hinata-card")

img.addEventListener("click", () => {
    if (img.style.border) {
        img.style.border = ""
    }
    else {
        img.style.border = "2px red solid"
    }
})
