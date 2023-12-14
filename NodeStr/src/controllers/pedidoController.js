'use strict';

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');
const repository = require('../repositories/pedidoRepository');
const ValidationContrato = require('../validators/fluent-validator');
const guid = require('guid');
const authService = require('../services/authService');

/* Totos os metodos chamam o Repository, que é onde se encontra a real chamada dos Clientes */

/* === IMPORTANTE === */
/* Para gerar o GUID deve-se instalar o pacote (npm install guid --save) */

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



//Cadastrando um produto
exports.post = async (req, res, next) => {

    /*
        //Regras de Validação
        let contract = new ValidationContrato();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.isEmail(req.body.email, 'O email é inválido');
        contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');
    
        // Se os dados forem inválidos
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }
    */
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        await repository.create({
            customer: data.id,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};