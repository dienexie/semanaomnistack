const express = require('express');

const OngControler = require('./controlers/OngControler');
const incidentControler = require('./controlers/incidentControler');
const profileControler = require('./controlers/profileControler');
const sessionControler = require('./controlers/sessionControler');

const routes = express.Router();

routes.post('/sessions', sessionControler.create);

routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', profileControler.index);

routes.get('/incidents', incidentControler.index);
routes.post('/incidents', incidentControler.create);
routes.delete('/incidents/:id', incidentControler.delete);

module.exports = routes;