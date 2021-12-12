const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

//Mensaje publico 
/* router.get('/', (req, res) => {
    res.json('Products server')
} ) */

//Crear un nuevo producto
router.post('/', controller.createNewProduct)

//Obtener todos los productos
router.get('/', controller.getAllProducts)

//Obtener productos por categoria
router.get('/:id', controller.getById)

//Actualizar producto
router.put('/:id', controller.updateProduct)

//Borrado logico mediante actualizacion de estado
router.patch('/:id', controller.updateProduct)

module.exports = router