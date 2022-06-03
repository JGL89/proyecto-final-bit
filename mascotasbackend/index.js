const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


// Creamos el servidor
const app = express();


// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

//app.use('/api/adopciones', require('./routes/adopciones'));


app.listen(4300, () => {
    console.log('El servidor esta corriendo perfectamente')
});