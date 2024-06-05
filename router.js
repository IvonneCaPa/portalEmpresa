/** cargamos modulos con require */
const express = require('express')
const mysql = require('mysql')
const path = require('path')

/** Iniciar rutas */
const router = express.Router()


/** datos para la conexion a la BD */
const configConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uf1846'
}

/** Coneccion a la base de datos */
const connection = mysql.createConnection(configConnection)

/** Variable para los diferentes departamentos */
let departamentos = []

/** query para dependiendo el departamento cambiar el color de fondo */
const selectDepartamentos = 'SELECT DISTINCT(departamento) FROM team GROUP BY departamento'
connection.query(selectDepartamentos, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        departamentos = result
    }
})

/** Ruta raiz */
router.get('/', (req, res) => {
    const selectAll = 'SELECT * FROM team'
    connection.query(selectAll, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            /** si funciona */
            res.render('index', { h2: 'Nuestro equipo', result, departamentos})
        }

    })
    /** probando si funciona la conexion entre app y router */
    // res.send('hola desde el router')
})

/** Ruta para los diferentes departamentos */
router.get('/departamento/:departamento', (req, res) => {
    const departamento = req.params.departamento
    const selectDepartamento = `SELECT * FROM team WHERE departamento = '${departamento}'`
    connection.query(selectDepartamento, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if(result.length === 0) {
                res.render('error', { departamentos })
            }
            res.render('index', { h2: 'Nuestro Equipo', result, departamentos })
        }
    })
})

/** ruta para la búsqueda por apellido */
router.get('/team/:apellido', (req, res) => {
    const team = req.params.apellido
    const selectTeam = `SELECT * FROM team WHERE apellido = '${team}'`
    connection.query(selectTeam, (err, result) => {
 
        if (err) {
            console.log(err)
        } else {
            if(result.length === 0) {
                res.render('error', { departamentos })
            }
            res.render('index', { h2: 'Nuestro equipo', result, departamentos })
        }

    })
})

/** Exportamos el router */
module.exports = { router, departamentos }