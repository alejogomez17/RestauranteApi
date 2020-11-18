module.exports = (app) => {    
    const usuarios = require('../controllers/usuario.controller.js');    
    // Create a new Product    
    app.post('/usuarios', usuarios.create);    
    // List all usuarios    
    app.get('/usuarios', usuarios.findAll);    
    // Get a single Product by id    product
    // app.get('/usuarios/:id', usuarios.findOne);    
    // // Update a Product by id    
    // app.put('/usuarios/:id', usuarios.update);       
    // // Delete a Product by id    
    // app.delete('/usuarios/:id', usuarios.delete);
}