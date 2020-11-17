const Usuario = require('../models/usuario.model.js');

// // Create and save a new Usuario
exports.create = (req, res) => {
    console.log("Creating a Usuario ... soon!");
    // Validate if the request's body is empty     
    // (does not include required data)    
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Usuario data can not be empty"
        });
    }
    // Create a new Usuario with request's data    
    const usuario = new Usuario({
        nombre: req.body.nombre,
        documento: req.body.documento,
        correo: req.body.correo,
        celular: req.body.celular || null,
        direccion: req.body.direccion || null,
        clave: req.body.clave
    });
    // Save the Usuario in the database    
    usuario.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};
// Retrieve and list all Usuarios
exports.findAll = (req, res) => {
    Usuario.find()
        .then(Usuarios => {
            res.status(200).send(Usuarios);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};
// // Get a single Usuario by its id
// exports.findOne = (req, res) => {
//     Usuario.findById(req.params.id)
//         .then(Usuario => {
//             if (!Usuario) {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             res.status(200).send(Usuario);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Something wrong ocurred while retrieving the record with id:" + req.params.id
//             });
//         });
// };
// // Update a Usuario by its id
// exports.update = (req, res) => {
//     // Validate if the request's body is empty     
//     // (does not include required data)    
//     if (Object.keys(req.body).length === 0) {
//         return res.status(400).send({
//             message: "Usuario data can not be empty"
//         });
//     }
//     // Find the Usuario and update it with the request body data    
//     Usuario.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         price: req.body.price || 0,
//         expiration: req.body.expiration || null
//     }, { new: true })
//         .then(Usuario => {
//             if (!Usuario) {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             res.status(200).send(Usuario);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Something wrong ocurred while updating the record with id:" + req.params.id
//             });
//         });
// };
// // Delete a Usuario by its id
// exports.delete = (req, res) => {
//     Usuario.findByIdAndRemove(req.params.id)
//         .then(Usuario => {
//             if (!Usuario) {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             res.status(200).send({ message: "Usuario deleted successfully!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Usuario not found with id:" + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Something wrong ocurred while deleting the record with id:" + req.params.id
//             });
//         });
// };