'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

//Listando todos os produtos
exports.get = (req, res, next) => {
    Produto
        //.find({}) <-- traz tudo (ALL)
        .find({
            ativo: true
        },
            'titulo preco slug') //traz somente esses campos separados por espaço
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por SLUG
exports.getBySlug = (req, res, next) => {
    Produto
        //.findOne({}) <-- Não traz o resultado como array
        .findOne({
            slug: req.params.slug,
            ativo: true
        }, 'titulo descricao preco slug tags') //traz somente esses campos separados por espaço
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por ID
exports.getById = (req, res, next) => {
    Produto
        //.findById({}) <-- Traz o resultado, todos os dados, nao precisa passar qual a coluna desejada, filtrando por ID
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando produtos por Tag
exports.getByTag = (req, res, next) => {
    Produto
        //.find({}) <-- Traz o resultado filtrando por Tag (OBS:) getByTag é um recurso do Mongoose
        //Ele faz a busca dentro de um array de string e nos retorna o resultado
        .find({
            tags: req.params.tag,
            ativo: true
        }, 'titulo descricao preco slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Cadastrando um produto
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

//Atualizando produto
exports.put = (req, res, next) => {
    Produto
        .findByIdAndUpdate(req.params.id, {
            $set: {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                preco: req.body.preco,
                slug: req.body.slug
            }
        }).then(x => {
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
    Produto
        .findOneAndDelete(req.body.id) // Passando o ID no BODY e não no PARAMS, é mais seguro
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

