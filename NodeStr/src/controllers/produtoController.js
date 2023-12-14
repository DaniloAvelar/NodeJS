'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');
const ValidationContrato = require('../validators/fluent-validator');
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
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.titulo, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.descricao, 3, 'O título deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        // Cria o Blob Service
        // const blobSvc = azure.createBlobService(config.containerConnectionString);

        let filename = guid.raw().toString() + '.jpg';
        let rawdata = req.body.image;
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = matches[1];
        let buffer = new Buffer(matches[2], 'base64');

        // Salva a imagem
        await blobSvc.createBlockBlobFromText('product-images', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default-product.png'
            }
        });

        await repository.create({
            titulo: req.body.titulo,
            slug: req.body.slug,
            descricao: req.body.descricao,
            preco: req.body.preco,
            ativo: true,
            tags: req.body.tags,
            imagem: 'https://nodestr.blob.core.windows.net/product-images/' + filename
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
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

