module.exports = (app) => {    
    const compras = require('../controllers/compra.controller.js');    
    const compraPlato = require('../controllers/compraplato.controller.js');    
    // Create a new Compra    
    app.post('/compras', compras.create);    
    // Create a new PlatoCompra    
    app.post('/compras/:idCompra/platos', compraPlato.create);    
    // Get a single Compra by id    product
    app.get('/compras/:id', compras.findOne);    
    // Update a Product by id    
    app.put('/compras/:id', compras.update);     

    app.get('/compras/:id/platos', compraPlato.findAllByCompra);   

    app.delete('/compras/:idCompraPlato/platos/:idPlato', compraPlato.deletePlatoFromCompra);
}