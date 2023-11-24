'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async () => {
    const res = await Produto.find({
        ativo: true
    }, 'titulo preco slug');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Produto
        //.findOne({}) <-- Não traz o resultado como array
        .findOne({
            slug: slug,
            ativo: true
        }, 'titulo descricao preco slug tags')
    return res;
}

exports.getById = async (id) => {
    const res = await Produto
        //.findById({}) <-- Traz o resultado, todos os dados, nao precisa passar qual a coluna desejada, filtrando por ID
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = await Produto
        //.find({}) <-- Traz o resultado filtrando por Tag (OBS:) getByTag é um recurso do Mongoose
        //Ele faz a busca dentro de um array de string e nos retorna o resultado
        .findOne({
            tags: tag,
            ativo: true
        }, 'titulo descricao preco slug tags')
    return res;
}

exports.create = async (data) => {
    var produto = new Produto(data);
    await produto.save()
}

exports.update = async (id, data) => {
    await Produto
        .findByIdAndUpdate(id, {
            $set: {
                titulo: data.titulo,
                descricao: data.descricao,
                preco: data.preco,
                slug: data.slug
            }
        });
}

exports.delete = async (id) => {
    await Produto
        .findOneAndDelete(id);
}