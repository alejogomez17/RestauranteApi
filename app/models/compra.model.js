const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompraSchema = mongoose.Schema({
    restaurante: {
        type: Schema.ObjectId,//Tipo de usuario es ObjectId
        ref: 'Usuario',//La referencia es un usuario
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Compra', CompraSchema);