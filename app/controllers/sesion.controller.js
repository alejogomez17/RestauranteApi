const Sesion = require('../models/sesion.model.js');
const Usuario = require('../models/usuario.model.js');

// // Create and save a new Sesion
exports.create = (req, res) => {
    console.log("Creating a Sesion ... soon!");
    // Validate if the request's body is empty     
    // (does not include required data)    
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Sesion data can not be empty"
        });
    }
    var correo = req.body.correo;
    var clave = req.body.clave;
    Usuario.findOne({ correo: correo })
        .then(UsuarioLog => {
            if (!UsuarioLog) {
                return res.status(404).send({
                    message: "Usuario not found with correo: " + correo
                });
            }
            if (UsuarioLog.clave != clave) {
                return res.status(401).send({
                    message: "Clave is incorrect"
                });
            }
            const codigoSesion = aleatorio(1000, 100000);
            // Create a new Sesion with usuarioLog data    
            const sesion = new Sesion({
                codigoSesion: codigoSesion,
                usuario: UsuarioLog._id,
                fecha: new Date()
            });
            // Save the Sesion in the database    
            sesion.save()
                .then(data => {
                    res.status(200).send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong occurred while creating the record."
                    });
                });
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Usuario not found with correo: " + correo
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while retrieving the record with correo:" + correo
            });
        });
};
function aleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// Retrieve and list all Usuarios
exports.findAll = (req, res) => {
    Sesion.find()
        .then(Sesiones => {
            res.status(200).send(Sesiones);
        }).catch(err => {
            res.status(500).send({
                message: "Something wrong occurred while retrieving the records."
            });
        });
};