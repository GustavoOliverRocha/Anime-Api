const mysql = require('mysql');

const {config_host,config_database,config_user,config_password} = require('./../config.js');

/**
 * Conectando ao banco de dados
 * */
const con = mysql.createPool({
  connectionLimit : 10,
  host            : config_host,
  database        : config_database,
  user            : config_user,
  password        : config_password,
});

/**
 * Testando a conectividade
 * 
 * */
con.getConnection((error, connection) => {
  if(error)
  {
    console.log('*********-Ops Ocorreu um erro ao conectar na base de dados: -*********');
    throw error;
  }	
  console.log('Connected');
});

module.exports = {con};