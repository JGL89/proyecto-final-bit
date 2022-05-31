const mongoose = require('mongoose');

const AdopcionesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);