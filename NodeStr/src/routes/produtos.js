'use strict'

const express = require('express');
const router = express.Router();

/* Metodo Post - Create */
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

/* Metodo Put - Update */
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

/* Metodo Delete */
const del = router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

module.exports = router;