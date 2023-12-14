'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const conf = require('./config');

mongoose.connect(conf.connectionString);

//Carregar Modelos
const Produto = require('./models/produto')
const Cliente = require('./models/cliente')
const Pedido = require('./models/pedido')

//Carrega Rotas
const index = require('./routes/index');
const produtos = require('./routes/produtos');
const clientes = require('./routes/clientes');
const pedidos = require('./routes/pedidos');

/* MIDWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/produtos', produtos);
app.use('/clientes', clientes);
app.use('/pedidos', pedidos);

module.exports = app;