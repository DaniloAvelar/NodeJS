'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.post = (req, res, next) => {
    var produto = new Produto(req.body);
    produto
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto codastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto!',
                data: e
            })
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

