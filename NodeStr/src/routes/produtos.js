'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

/* Metodo Post - Create */
/* Metodo Put - Update */
/* Metodo Delete */
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete)

module.exports = router;