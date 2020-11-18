module.exports = (app) => {    
    const compras = require('../controllers/compra.controller.js');    
    // Create a new Compra    
    app.post('/compras', compras.create);    
    // Create a new PlatoCompra    
    app.post('/compras/:id/platos', compras.create);    
    // List all usuarios    
    // app.get('/compras', compras.findAll);    
    // Get a single Product by id    product
    // app.get('/usuarios/:id', usuarios.findOne);    
    // // Update a Product by id    
    // app.put('/usuarios/:id', usuarios.update);       
    // // Delete a Product by id    
    app.delete('/compras/:idCompra/platos/:idPlato', platos.deleteFromCompra);
}