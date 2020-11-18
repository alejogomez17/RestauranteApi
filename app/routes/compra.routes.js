module.exports = (app) => {    
    const compras = require('../controllers/compra.controller.js');    
    // Create a new Product    
    app.post('/compras', compras.create);    
    // List all usuarios    
    // app.get('/compras', compras.findAll);    
    // Get a single Product by id    product
    // app.get('/usuarios/:id', usuarios.findOne);    
    // // Update a Product by id    
    // app.put('/usuarios/:id', usuarios.update);       
    // // Delete a Product by id    
    // app.delete('/usuarios/:id', usuarios.delete);
}