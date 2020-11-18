const Compraplato = require('../models/compraplato.model.js');

// // Create and save a new Plato
exports.create = (req, res) => {
    console.log("Creating a Compraplato ... soon!");
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Compra data can not be empty"
        });
    }
    const compra = req.params.idCompra;
    // Create a new Compraplato with request's data    
    const compraplato = new Compraplato({
        plato: req.body.plato,
        compra: compra,
        cantidad: req.body.cantidad
    });
    // Save the Compraplato in the database    
    compraplato.save()
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
    Plato.find({ restaurante: req.params.idRestaurante })
        .then(platos => {
            res.status(200).send(platos);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};

exports.findOneByRestauranteAndPlato = (req, res) => {
    Plato.findOne({ _id: req.params.idPlato, restaurante: req.params.idRestaurante })
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

// Retrieve and list all Platos
exports.findAllByCompra = (req, res) => {
    Compraplato.find({ compra: req.params.id })
        .then(platos => {
            res.status(200).send(platos);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};

// Delete a Product by its id
exports.deletePlatoFromCompra = (req, res) => {
    Compraplato.findOneAndRemove({_id:req.params.idCompraPlato,plato:req.params.idPlato })
        .then(plato => {
            if (!plato) {
                return res.status(404).send({
                    message: "Plato not found with id:" + req.params.idPlato
                });
            }
            res.status(200).send({ message: "Plato deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Plato not found with id:" + req.params.idPlato
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while deleting the record with id:" +
                    req.params.id
            });
        });
};