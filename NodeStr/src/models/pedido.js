'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId, //Referenciando o Model de cliente para o pedido
        ref: 'Cliente'
    },
    idPedido: {
        type: String,
        required: true
    },
    dataPedido: {
        type: Date,
        required: true,
        default: Date.now
    },
    statusPedido: {
        type: String,
        required: true,
        enum: ['Criado', 'Não-Criado'],
        default: 'Criado'
    },
    itensPedido: [{
        quantidade: {
            type: Number,
            required: true,
            default: 1
        },
        preco: {
            type: Number,
            required: true
        },
        produto: {
            type: mongoose.Schema.Types.ObjectId, //Referenciando o Model de Produto para o pedido
            ref: 'Produto'
        }
    }],
});

module.exports = mongoose.model('Pedido', schema)