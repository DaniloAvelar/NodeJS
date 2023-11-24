'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');
const repository = require('../repositories/produtoRepository');

/* Totos os metodos chamam o Repository, que é onde se encontra a real chamada dos produtos */

//Listando todos os produtos
exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

//Listando por SLUG
exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição lista por Slug'
        });
    }
}

//Listando por ID
exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição lista por Id'
        });
    }
}

//Listando por Tag
exports.getByTag = async (req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição lista por Tag'
        });
    }
}

//Cadastrando um produto
exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar o produto!'
        });
    }

};

//Atualizando produto
exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'Produto atualizado com sucesso',
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar o produto'
        });
    }
};

//Deletando um produto
exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(201).send({
            message: 'Produto removido com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao remover o produto!'
        });
    }
};

