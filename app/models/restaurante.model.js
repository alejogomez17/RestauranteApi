const mongoose = require('mongoose');

const RestauranteSchema = mongoose.Schema({
    nombre: {
        type: String,
        unique: false,
        required: true,
        trim: false,
        minlength: 2   
    },
    direccion: {
        type: String,
        required: true,
        minlength: 4   
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        minlength: 7    
    },
    atencion: {
        type: String,
        required: true,
        minlength: 4    
    },
    logo: {
        type: String,
        minlength: 4    
    }
},  {
    timestamps: true
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);