/** Cargar modulos necesarios */
const express = require('express')

/** importamos el router */
const {router} = require('./router.js')

/** Crear la variable que va a guardar todo */
const app = express()

/** Crear la variable del puerto */
const PORT = 3000;

/** Pruebo hasta aqui que vayan bien las cosas */
// app.get('/', (req, res) => {
// 	res.send("hola mundo");
// });

/** Definir motor de plantillas */
app.set('view engine', 'ejs')

/** configurar  express */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/** Le decimos al servidor que utilice los ficheros public */
app.use(express.static('public'))

/** usamos el router */
app.use(router)

/** definir que hacer en caso de error */ 
/** Como se hace ahora ruta ya no necesitamos las lineas de abajo */
// app.use((req, res) => {
//     res.status(404).render('error', {departamentos})
// })




/** Inicializamos un servidor */
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})
