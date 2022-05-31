const express = require('express');
const conectarDB = require('./config/db');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adopcionesRouter = require('/routes/adopciones');


// Creamos el servidor
const app = express();
const port = 4000;

app.use('/api/adopciones', adopcionesRouter);

// Conectamos a la BD
conectarDB();

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
});