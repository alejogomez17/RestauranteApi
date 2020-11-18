const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        unique: false,
        required: true,
        trim: false,
        minlength: 2   
    },
    documento: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 6    
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 4    
    },
    celular: {
        type: String,
        trim: true,
        minlength: 7    
    },
    direccion: {
        type: String,
        minlength: 4    
    },
    clave: {
        type: String,
        required: true,
        minlength: 4    
    }
},  {
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);