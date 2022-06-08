const express = require('express');
const router = express.Router();
const adopcionSchema = require('../models/adopciones');
  
  
  router.post('/adopciones', (request, response) => {
    //response.send('Crear adopcion');
    console.log('request:', request.body);
  const newAdopcion = adopcionSchema(request.body);
  newAdopcion
    .save()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.get('/adopciones', (request, response) => {
    //response.send('Leer todas las adopciones');
    adopcionSchema
    .find()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.get('/adopciones/:id', (request, response) => {
    console.log(request.params)
    //response.send('Leer una adopcion especifica');
    const { id } = request.params;
    console.log(id)
    adopcionSchema
      .findById(id)
      .then((data) => response.json({ success: data }))
      .catch((err) => response.json({ failured: err }));
  });

  router.put('/adopciones/:id', (request, response) => {
    //response.send('Actualizar una adopcion');
  const { id } = request.params;
  const adopcion = request.body;
  adopcionSchema
    .updateOne({ _id: id }, { $set: adopcion})
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.delete('/adopciones/:id', (request, response) => {
    //response.send('Eliminar una adopcion');
    const { id } = request.params;
    console.log(id)
  adopcionSchema
    .deleteOne({ _id: id })
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  module.exports = router;