document.getElementById('registroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombres: e.target.nombres.value,
        apellidos: e.target.apellidos.value,
        fecha_nacimiento: e.target.fecha_nacimiento.value,
        correo: e.target.correo.value,
        contrasena: e.target.contrasena.value
    };

    try {
        const response = await fetch('http://localhost:3000/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('¡Cuenta creada exitosamente!');
            window.location.href = 'index.html';
        } else {
            alert('Error: ' + result.mensaje);
        }
    } catch (error) {
        alert('No se pudo conectar con el servidor');
    }
});