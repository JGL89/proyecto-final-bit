// Rutas para adopción
import { Router } from 'express';
const router = Router();
const adopcionController = require('../controllers/adopcionController');

// api/productos
router.post('/', adopcionController.crearAdopcion);