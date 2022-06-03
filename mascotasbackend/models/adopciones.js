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
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Adopciones', AdopcionesSchema);