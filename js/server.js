const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // tu usuario de MySQL
    password: '1234',     // tu contraseña
    database: 'mi_app'    // nombre de tu base de datos
});

db.connect((err) => {
    if (err) console.error('Error al conectar:', err);
    else console.log('Conectado a MySQL ✓');
});

// Ruta de registro
app.post('/registro', async (req, res) => {
    const { nombres, apellidos, fecha_nacimiento, correo, contrasena } = req.body;

    // Encriptar contraseña
    const hash = await bcrypt.hash(contrasena, 10);

    const query = `
        INSERT INTO usuarios (nombres, apellidos, fecha_nacimiento, correo, contrasena)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [nombres, apellidos, fecha_nacimiento, correo, hash], (err) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ mensaje: 'El correo ya está registrado' });
            }
            return res.status(500).json({ mensaje: 'Error en el servidor' });
        }
        res.json({ mensaje: 'Usuario creado exitosamente' });
    });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));