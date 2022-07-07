const mysql = require('mysql');

const host = 'localhost',
	    database = 'db_mycharlist',
	    user = 'root',
	    password = '';

/**
 * Conectando ao banco de dados
 * */
const con = mysql.createPool({
  connectionLimit : 10,
  host            : host,
  user            : user,
  password        : password,
  database        : database
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