const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Usuario = mongoose.model('Usuario');

const SesionSchema = Schema({
    codigoSesion: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4   
    },
    usuario: {
        type: Schema.ObjectId, 
        ref: "Usuario",
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
},  {
    timestamps: true
});

module.exports = mongoose.model('Sesion', SesionSchema);