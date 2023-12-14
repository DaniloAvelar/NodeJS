'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');
const authService = require('../services/authService')

/* Metodo Post - Create */
/* Metodo Put - Update */
/* Metodo Delete */
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', authService.authorize, controller.post); // Utilizando o autorize para acessar a rota somente com token
router.put('/:id', controller.put);
router.delete('/', controller.delete)

module.exports = router;