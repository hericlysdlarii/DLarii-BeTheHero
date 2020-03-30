const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/*
    GET: buscar/listar informações do back-end
    POST: cria uma informação no back-end
    PUT: altera uma informação no back-end
    DELETE: deleta uma infomação no back-end
*/
/*
    Tipos de parâmetros:

    Query Params: parâmetros nomeados enviados na rot após "?" (Filtros, paginação)
    Route Params: parâmetros utilizados para identificar recursos
    Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/