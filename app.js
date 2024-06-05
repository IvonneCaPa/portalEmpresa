/** Cargar modulos necesarios */
const express = require('express');

/** Crear la variable que va a guardar todo */
const app = express();

/** Crear la variable del puerto */
const PORT = 3000;

/** Pruebo hasta aqui que vayan bien las cosas */
app.get('/', (req, res) => {
	res.send("hola mundo");
});

/** Inicializamos un servidor */
app.listen(PORT, () =>{
    console.log(`servidor en http://localhost:${PORT}`);
    })
    