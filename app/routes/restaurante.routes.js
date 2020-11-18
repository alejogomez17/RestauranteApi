module.exports = (app) => {    
    const restaurantes = require('../controllers/restaurante.controller.js'); 
    const platos = require('../controllers/plato.controller.js');    
    // Create a new Restaurante    
    app.post('/restaurantes', restaurantes.create);    
    // List all restaurantes    
    app.get('/restaurantes', restaurantes.findAll);   

    //******Platos******** */
    // Create a new Plato by restaurant    
    app.post('/restaurantes/:idRestaurante/platos', platos.create);    
    //List all platos by restaurant
    app.get('/restaurantes/:idRestaurante/platos', platos.findAllByRestaurant);   

    app.get('/restaurantes/:idRestaurante/platos/:idPlato', platos.findOneByRestauranteAndPlato);  
}