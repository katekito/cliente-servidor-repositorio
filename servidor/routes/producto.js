// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');



// api/productos
router.post('/', productoController.crearProducto); /* se pasa la constante productoController  y el metodo crearProducto */ /* cuando se ejecuta el post, se ejecuta productoController,crearProducto  */ /* se importara controlador de productoController.js */
router.get('/', productoController.obtenerProductos) /* cuando se acceda a la ruta raiz en index.js con verbo tipo get, se ejecuta una funcion */
router.put('/:id', productoController.actualizarProducto); 
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);


module.exports = router;