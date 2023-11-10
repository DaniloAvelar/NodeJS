'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//Carrega Rotas
const index = require('./routes/index');
const produtos = require('./routes/produtos');

/* MIDWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/produtos', produtos);

module.exports = app;