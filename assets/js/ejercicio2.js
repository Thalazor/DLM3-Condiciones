// Ejercicio 2
const sticker001 = document.querySelector("#sticker001");
const sticker002 = document.querySelector("#sticker002");
const sticker003 = document.querySelector("#sticker003");
const parrafo = document.querySelector("#parrafo")
const button = document.querySelector("#verificar");

button.addEventListener("click", () => {
    // Transforma las variables capturadas desde el DOM
    const input1 = Number(sticker001.value);
    const input2 = Number(sticker002.value);
    const input3 = Number(sticker003.value);

    let resultado = input1 + input2 + input3;

    if (resultado <= 10) {
        parrafo.innerHTML = "Llevas " + resultado + " Stickers."
    }
    else {
        parrafo.innerHTML = "Llevas demasiados Stickers."
    }
})