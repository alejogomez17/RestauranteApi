const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatoSchema = mongoose.Schema({
    nombre: {
        type: String,
        unique: false,
        required: true,
        trim: false,
        minlength: 2
    },
    presentacion: {
        type: String,
        required: true,
        minlength: 2
    },
    precio: {
        type: Number,
        required: true,
        minlength: 3
    },
    categoria: {
        type: String,
        minlength: 4
    }, 
    restaurante: {
        type: Schema.ObjectId,//Tipo de usuario es ObjectId
        ref: 'Restaurante',//La referencia es un usuario
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Plato', PlatoSchema);