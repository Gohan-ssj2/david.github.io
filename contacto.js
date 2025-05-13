// Variables globales
let nombre_field;
let nacimiento_field;
let color_field;
let comentario_field;
let subscribe_field;
let contact_form;

// Inicialización cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias
    nombre_field = document.getElementById("campo-nombre");
    nacimiento_field = document.getElementById("campo-fecha");
    color_field = document.getElementById("campo-color");
    comentario_field = document.getElementById("campo-comentario");
    subscribe_field = document.getElementById("subscribe");
    contact_form = document.getElementById("contact-form");

    // Resouesta al pulsar el boton
    subscribe_field.addEventListener("change", function(event) {
        if (subscribe_field.checked) {
            console.log("Muajajaja tu alma es mía");
        } else {
            console.log("Nooooooooooooooooooooo!");
        }
    });

    // Respuesta al enviarse el formulario
    contact_form.addEventListener("submit", (event) => {
        let send = true;

        // Comprobación del nombre
        if (nombre_field.value.length < 2 || nombre_field.value.length > 32) {
            send = false;
            nombre_field.style.border = "3px solid red";
        } else {
            nombre_field.style.border = "3px solid green";
        }

        // Comprobación de la fecha
        if (nacimiento_field.value === "" || nacimiento_field.value.length !== 10) {
            send = false;
            nacimiento_field.style.border = "3px solid red";
        } else {
            const date = nacimiento_field.value.split("-");
            const year = parseInt(date[0]);
            const month = parseInt(date[1]);
            const day = parseInt(date[2]);

            if (isNaN(year) || isNaN(month) || isNaN(day) ||
                year <= 0 || year > 2025 ||
                month <= 0 || month > 12 ||
                day <= 0 || day > 31) {
                send = false;
                nacimiento_field.style.border = "3px solid red";
            } else {
                nacimiento_field.style.border = "3px solid green";
            }
        }

        // Comprobamos el color 
        if (color_field.value.length !== 7 || color_field.value[0] !== "#") {
            send = false;
            color_field.style.border = "3px solid red";
        } else {
            color_field.style.border = "3px solid green";
        }

        // Comprobamos la longitud del comentario
        if (comentario_field.value.length < 5 || comentario_field.value.length > 500) {
            send = false;
            comentario_field.style.border = "3px solid red";
        } else {
            // Evitamos problemas ;)
            comentario_field.value = comentario_field.value.replace(/'/g, "\\'");
            comentario_field.style.border = "3px solid green";
        }

        // Prevenir envío si hay errores
        if (!send) {
            event.preventDefault();
            alert("Por favor, corrige los errores en el formulario.");
        }
    });
});