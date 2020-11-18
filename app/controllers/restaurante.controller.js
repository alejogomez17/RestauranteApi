const Restaurante = require('../models/restaurante.model.js');

// // Create and save a new Restaurante
exports.create = (req, res) => {
    console.log("Creating a Restaurante ... soon!");
    // Validate if the request's body is empty     
    // (does not include required data)    
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Restaurante data can not be empty"
        });
    }
    // Create a new Restaurante with request's data    
    const restaurante = new Restaurante({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        atencion: req.body.atencion,
        logo: req.body.logo || null
    });
    // Save the Restaurante in the database    
    restaurante.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};
// Retrieve and list all Restaurantes
exports.findAll = (req, res) => {
    Restaurante.find()
        .then(restaurantes => {
            res.status(200).send(restaurantes);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};