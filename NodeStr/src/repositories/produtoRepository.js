'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = () => {
    return Produto
        .find({
            ativo: true
        }, 'titulo preco slug'); //traz somente esses campos separados por espaço
}

exports.getBySlug = (slug) => {
    return Produto
        //.findOne({}) <-- Não traz o resultado como array
        .findOne({
            slug: slug,
            ativo: true
        }, 'titulo descricao preco slug tags');
}

exports.getById = (id) => {
    return Produto
        //.findById({}) <-- Traz o resultado, todos os dados, nao precisa passar qual a coluna desejada, filtrando por ID
        .findById(id);
}

exports.getByTag = (tag) => {
    return Produto
        //.find({}) <-- Traz o resultado filtrando por Tag (OBS:) getByTag é um recurso do Mongoose
        //Ele faz a busca dentro de um array de string e nos retorna o resultado
        .find({
            tags: tag,
            ativo: true
        }, 'titulo descricao preco slug tags')
}

exports.create = (data) => {
    var produto = new Produto(data);
    return produto.save()
}

exports.update = (id, data) => {
    return Produto
        .findByIdAndUpdate(id, {
            $set: {
                titulo: data.titulo,
                descricao: data.descricao,
                preco: data.preco,
                slug: data.slug
            }
        });
}

exports.delete = (id) => {
    return Produto
        .findOneAndDelete(id); 
}