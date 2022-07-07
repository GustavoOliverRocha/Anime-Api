const express = require('express');
const rotas = require('./routes/routes.js');
const app = express();

/**
 * 
 * */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
 * Usando as rotas da camada routes
 * */
app.use('/', rotas);

/**
 * Iniciando o servidor
 * */
app.listen(process.env.port || 8080);
console.log('Server Rodando na Porta 8080');