'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteController');
const authService = require('../services/authService')

/* Metodo Post - Create */
/* Metodo Put - Update */
/* Metodo Delete */

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);




module.exports = router;