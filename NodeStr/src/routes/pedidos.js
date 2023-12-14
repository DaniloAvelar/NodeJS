'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');
const authService = require('../services/authService');


/* Metodo Post - Create */
/* Metodo Put - Update */
/* Metodo Delete */

router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);

/*router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.put('/:id', controller.put);
router.delete('/', controller.delete)*/



module.exports = router;