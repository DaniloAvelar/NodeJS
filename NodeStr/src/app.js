'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

/* MIDWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* Metodo GET - Read */
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

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


app.use('/', route);
app.use('/produtos', create);
app.use('/produtos', put);
app.use('/produtos', del);

module.exports = app;