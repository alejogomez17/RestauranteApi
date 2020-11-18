module.exports = (app) => {    
    const sesiones = require('../controllers/sesion.controller.js');    
    // Create a new Sesion    
    app.post('/sesiones', sesiones.create);    
    // List all sesiones    
    app.get('/sesiones', sesiones.findAll);
}