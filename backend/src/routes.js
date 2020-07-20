const express = require('express');

const OngController = require('./controlers/OngController');
const IncidentController = require('./controlers/IncidentController');
const ProfileController = require('./controlers/ProfileController');
const SessionControler = require('./controlers/SessionControler');

const routes = express.Router();

//login
routes.post('/sessions', SessionControler.create);

//listar ongs
routes.get('/ongs', OngController.index);
//criar ongs
routes.post('/ongs', OngController.create);

//listar casos
routes.get('/incidents', IncidentController.index);
//criar casos
routes.post('/incidents', IncidentController.create);
//apagar casos
routes.delete('/incidents/:id', IncidentController.delete)

//listar casos especificos de uma ong 
routes.get('/profile', ProfileController.index);
 
module.exports = routes;