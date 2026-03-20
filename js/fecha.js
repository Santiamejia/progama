const elemento = document.getElementById("fecha-hora");

function actualizarFechaHora() {
    const ahora = new Date();

    const opciones = {
        weekday: "long",    // Lunes, Martes...
        year: "numeric",    // 2026
        month: "long",      // Enero, Febrero...
        day: "numeric",     // 17
        hour: "2-digit",    // 02
        minute: "2-digit",  // 30
        second: "2-digit"   // 45
    };

    const fechaFormateada = ahora.toLocaleDateString("es-ES", opciones);
    elemento.textContent = fechaFormateada;
}

// Llama la función al cargar
actualizarFechaHora();

// Se actualiza cada segundo
setInterval(actualizarFechaHora, 1000);