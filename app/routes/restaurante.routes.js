module.exports = (app) => {    
    const restaurantes = require('../controllers/restaurante.controller.js');    
    // Create a new Restaurante    
    app.post('/restaurantes', restaurantes.create);    
    // List all restaurantes    
    app.get('/restaurantes', restaurantes.findAll);    
}