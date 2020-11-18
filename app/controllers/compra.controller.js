const Plato = require('../models/compra.model.js');

// // Create and save a new Plato
exports.create = (req, res) => {
    console.log("Creating a Plato ... soon!");
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Plato data can not be empty"
        });
    }
    const restaurante = req.params.idRestaurante;
    // Create a new Plato with request's data    
    const plato = new Plato({
        nombre: req.body.nombre,
        presentacion: req.body.presentacion,
        precio: req.body.precio,
        categoria: req.body.categoria || null,
        restaurante: restaurante
    });
    // Save the Plato in the database    
    plato.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};

// Retrieve and list all Platos
exports.findAllByRestaurant = (req, res) => {
    Plato.find({restaurante:req.params.idRestaurante})
        .then(platos => {
            res.status(200).send(platos);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};

exports.findOneByRestauranteAndPlato = (req, res) => {
    Plato.findOne({_id:req.params.idPlato, restaurante:req.params.idRestaurante})
        .then(plato => {
            if (!plato) {
                return res.status(404).send({
                    message: "Plato not found with id:" + req.params.id
                });
            }
            res.status(200).send(plato);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Plato not found with id:" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while retrieving the record with id:" + req.params.id
            });
        });
};