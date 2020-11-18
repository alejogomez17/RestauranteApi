module.exports = (app) => {    
    const usuarios = require('../controllers/usuario.controller.js');    
    // Create a new Product    
    app.post('/usuarios', usuarios.create);    
    // List all usuarios    
    app.get('/usuarios', usuarios.findAll);    
}