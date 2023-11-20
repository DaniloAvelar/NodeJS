'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://daavelar:aKdzjISufs6FyqF2@nodestr.vnrrpwo.mongodb.net/?retryWrites=true&w=majority')

//Carregar Modelos
const Produto = require('./models/produto')

//Carrega Rotas
const index = require('./routes/index');
const produtos = require('./routes/produtos');

/* MIDWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/produtos', produtos);

module.exports = app;