// Variables del juego
let numero = Math.floor(Math.random() * 100) + 1;
const num_min = 1;
const num_max = 100;
let intentos = 0;

// Elementos del DOM
const boton = document.getElementById("boton");
const inputNumero = document.getElementById("adivina");
const resultado = document.getElementById("resultado");

// Inicio del juego
document.addEventListener("DOMContentLoaded", () => {
    boton.addEventListener("click", compara_numero);
    inputNumero.focus();
});


function compara_numero() {
    const input = parseInt(inputNumero.value);
    
    // Comprobacion numero correcto
    if (isNaN(input) || input < num_min || input > num_max) {
        resultado.innerHTML = `<em class="error">Debes introducir un número entre ${num_min} y ${num_max}</em>`;
        inputNumero.value = "";
        inputNumero.focus();
        return;
    }

    intentos++;
    boton.value = `¡Adivina! (${intentos})`;
    
    // Comprobaciones juego
    if (input > numero) {
        resultado.innerHTML = `<em class="error">El número es más <strong>bajo</strong> que ${input} :(</em>`;
    } else if (input < numero) {
        resultado.innerHTML = `<em class="error">El número es más <strong>alto</strong> que ${input} :p</em>`;
    } else {
        resultado.innerHTML = `<em class="you-win">¡Oleee! Has adivinado el número (era ${input}) en ${intentos} intentos</em>`;
        boton.disabled = true;
        inputNumero.disabled = true;
    }
    
    // Preparar para siguiente intento
    inputNumero.value = "";
    inputNumero.focus();
}