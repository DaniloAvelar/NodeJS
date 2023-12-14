'use strict';

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

//Listando todos os Pedidos
exports.get = async () => {
    const res = await Pedido
        .find({}, 'idPedido statusPedido dataPedido')
        .populate('cliente', 'nome')
        .populate('itensPedido.produto', 'titulo');
    return res;
}

//Criando um Novo Pedido
exports.create = async (data) => {
    var pedido = new Pedido(data);
    await pedido.save()
}