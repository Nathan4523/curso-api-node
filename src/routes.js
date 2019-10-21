const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

/**
 * primeira rota
 * Req = é tudo corpo da requisição
 * Res = é a resposta da requisição
 */
routes.get('/helloWorld', (req, res) => {
   return res.json('Hello World')
});

//produtos
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;