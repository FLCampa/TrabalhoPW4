const express = require('express');
const consign = require('consign');
const server = express();
const i18n = require('i18n');

i18n.configure({
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    extension: '.json',
    directory: './../locations',
    cookie: 'trabalhopw4'
});

server.use(i18n.init);

server.use(express.urlencoded({extended: true}));

consign()
    .include('application/routes')
    .then('application/model')
    .then('application/controller')
    .then('application/DAO')
    .then('application/config/dbConnection.js')
    .into(server);

module.exports = server;