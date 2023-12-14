'use strict';

/* IMPORTANTE - npm install sendgrid@2.0.0 --save*/

var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'daniloaliotto@gmail.com',
        subject: subject,
        html: body
    });
}

