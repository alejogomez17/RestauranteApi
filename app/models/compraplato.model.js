const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompraplatoSchema = mongoose.Schema({
    compra: {
        type: Schema.ObjectId,//Tipo de compra es ObjectId
        ref: 'Compra',//La referencia es una compra
        required: true
    },
    plato: {
        type: Schema.ObjectId,//Tipo de plato es ObjectId
        ref: 'Plato',//La referencia es un plato
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Compraplato', CompraplatoSchema);