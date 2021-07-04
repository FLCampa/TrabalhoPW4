const express = require('express');
const consign = require('consign');
const server = express();
const i18n = require('i18n');
const cors = require('cors');

i18n.configure({
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    extension: '.json',
    directory: './../locations',
    cookie: 'trabalhopw4'
});

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
server.use(cors(corsOptions));
server.use(i18n.init);

server.use(express.urlencoded({extended: true}));
server.use(express.json());

consign()
    .include('application/routes')
    .then('application/model')
    .then('application/controller')
    .then('application/DAO')
    .then('application/config/dbConnection.js')
    .into(server);

module.exports = server;