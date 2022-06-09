const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes');
const dotenv = require('dotenv');


const server = express();
const port = 4000;

server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/', (req, res) => res.json({ usersRootOnline: true }));

dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
  .then(() =>console.log('conectado con la base de datos'))
  .catch((err) =>
  console.log('Error al conectarse a la base de datos, erro: ' + err)
  );

  server.listen(port, () => {
    console.log(`Servidor corriendo en localhost, en el puerto ${port}`);
  });