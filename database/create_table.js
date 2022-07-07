const {con} = require('./db-core.js');

var st_query = `CREATE TABLE IF NOT EXISTS anime(
					id int not null PRIMARY KEY AUTO_INCREMENT,
					name varchar(100) not null,
					description text,
					alterName varchar(100) not null,
					episodes int not null,
					studio varchar(100) not null);`;
var st_query2 = `INSERT INTO anime(name,description,alterName,episodes,studio) VALUES
			('Puella Magi Madoka Magica','','MadoMagi',13,'Shaft'),
			('Neon Genesis Evangelion','','Eva',26,'Gainax')`;


con.query(st_query,(error)=>{
	if(error)
		throw error;
	else
		console.log('Table Created');
});
con.query(st_query2,(error)=>{
	if(error)
		throw error;
	else
		console.log('2 records inserted');
});
/**
 * Função para dropar a tabela caso precise resetar os registros
 * 
 * */
const drop = ()=>{
	con.query('DROP TABLE IF EXISTS anime',(error)=>{
		if(error)
			throw error;
		else
			console.log('table deleted');
	});
}

//drop();