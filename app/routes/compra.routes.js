module.exports = (app) => {    
    const compras = require('../controllers/compra.controller.js');    
    const comprasplato = require('../controllers/compraplato.controller.js');
    // Create a new Compra    
    app.post('/compras', compras.create);    
    // Create a new PlatoCompra    
    app.post('/compras/:idCompra/platos', comprasplato.create);    
    // List all usuarios    
    // app.get('/compras', compras.findAll);    
    // Get a single Compra by id    product
    app.get('/compras/:id', compras.findOne);    
    // Update a Product by id    
    app.put('/compras/:id', compras.update);       
    // // Delete a Product by id    
    // app.delete('/usuarios/:id', usuarios.delete);
}