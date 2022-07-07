const {con} = require('./db-core.js');

/**
 * "flags:" são configurações extras
 * 
 * Pelo fato do objeto de conexão
 * não ter a flag:MULTI_STATEMENTS não é possivel
 * fazer mais de 1 comando sql por query() essa é uma medida de proteção
 * contra sql injection
 * 
 * caso queira ativar
 * apenas vá para o db_core e insira um atributo na conexão
 * flags: 'MULTI_STATEMENTS'
 * */
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



/**
 * Funções para criar as tabelas ou reseta-las
 * 
 * */
const drop = ()=>{
	con.query('DROP TABLE IF EXISTS anime',(error)=>{
		if(error){
			console.log('Erro na exclusão das tabelas');
			throw error;
		}
		else
			console.log('table deleted');
	});
}
const up = ()=>{
	con.query(st_query,(error)=>{
		if(error)
		{
			console.log('Erro na criação das tabelas');
			throw error;
		}	
		else
			console.log('Table Created');
	});


}
const insert = ()=>{
		con.query(st_query2,(error)=>{
		if(error)
		{
			console.log('Erro na inserção');
			throw error;
		}
		else
			console.log('2 records inserted');
	});
}
drop();
up();
/**
 * Descomente caso queira umas "pre-inserções"(faça isso apenas após criar as tabelas)
 * E depois comente as funções drop() e up()
 * */
 //insert();
