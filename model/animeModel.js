const {con} = require('./../database/db-core.js');

exports.show = (req,res)=> {

	con.query('SELECT * FROM anime',(error, result)=>{
		if(error)
		{
			console.log('Ocorreu um Erro')
			throw error;
		}
		//console.log(result)
		res.send("asssadasd");
	});

}