const schemaProducts = require('../models/products');

const controller = {}

controller.createNewProduct = (req, res) => {
    product = schemaProducts(req.body);
    product
        .save()
        .then(data =>  res.json(data))
        .catch(err => res.json({message:err}))
}

controller.getAllProducts = (req, res) => {
    schemaProducts
            .find()
            .then(data => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.getById = (req, res) => {
    const { id } = req.params;
    schemaProducts
            .findById(id)
            .then((data) => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, categoria, sabor, precio } = req.body;
    schemaProducts
            .updateOne({_id: id}, {$set:{ nombre, categoria, sabor, precio }})
            .then((data) =>  res.json(data))
            .catch((error) =>  res.json({message: error}))
}

//Controlador usado para cambiar solo el estado mediante patch
controller.updateProduct = (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    schemaProducts
            .updateOne({_id: id}, {$set:{ estado }})
            .then((data) =>  res.json(data))
            .catch((error) =>  res.json({message: error}))
}


module.exports = controller;