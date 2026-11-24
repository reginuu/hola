
function mostrarMensaje() {
    document.getElementById("mensaje").textContent =
        "¡Gracias por visitar ENHYPEN WORLD! ";
}

function recomendarCancion() {
    const canciones = [
        "FEVER",
        "Drunk-Dazed",
        "Polaroid Love",
        "Bite Me",
        "Sweet Venom",
        "XO (Only If You Say Yes)",
        "Echoes",
        "Given Taken",
        "No hagas caso y mejor escucha twice"
    ];

    const numero = Math.floor(Math.random() * canciones.length);

    document.getElementById("recomendacion").textContent =
        "¡Te recomendamos escuchar: " + canciones[numero] + "!";
}
