'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');
const repository = require('../repositories/produtoRepository');

/* Totos os metodos chamam o Repository, que é onde se encontra a real chamada dos produtos */

//Listando todos os produtos
exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por SLUG
exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por ID
exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por Tag
exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Cadastrando um produto
exports.post = (req, res, next) => {
    repository
        .create(req.body)
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

//Atualizando produto
exports.put = (req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto!',
                data: e
            })
        });
};

//Deletando um produto
exports.delete = (req, res, next) => {
    repository
        .delete(req.body.id) // Passando o ID no BODY e não no PARAMS, é mais seguro
        .then(x => {
            res.status(201).send({
                message: 'Produto removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o produto!',
                data: e
            })
        });
};

