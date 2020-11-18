const Compra = require('../models/compra.model.js');

// // Create and save a new Compra
exports.create = (req, res) => {
    console.log("Creating a Compra ... soon!");
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Compra data can not be empty"
        });
    }
    // Create a new Compra with request's data    
    const compra = new Compra({
        usuario: req.body.usuario,
        fecha: req.body.fecha,
        estado: 'creada'
    });
    // Save the Compra in the database    
    compra.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};

// // Get a single Usuario by its id
exports.findOne = (req, res) => {
    Compra.findById(req.params.id)
        .then(Compra => {
            if (!Compra) {
                return res.status(404).send({
                    message: "Usuario not found with id:" + req.params.id
                });
            }
            res.status(200).send(Compra);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Usuario not found with id:" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while retrieving the record with id:" + req.params.id
            });
        });
};

// Update a Compra by its id
exports.update = (req, res) => {
    // Validate if the request's body is empty     
    // (does not include required data)    
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Compra data can not be empty"
        });
    }
    // Find the Usuario and update it with the request body data    
    Compra.findByIdAndUpdate(req.params.id, {
        estado: req.body.estado
    }, { new: true })
        .then(Compra => {
            if (!Compra) {
                return res.status(404).send({
                    message: "Usuario not found with id:" + req.params.id
                });
            }
            res.status(200).send(Compra);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Usuario not found with id:" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while updating the record with id:" + req.params.id
            });
        });
};