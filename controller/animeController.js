const {con} = require('./../database/db-core.js');

exports.show = (req,res)=> {
	let baseUri = "localhost:8080/anime/id/";
	let rows = [];
	con.query('SELECT * FROM anime',(error, result)=>{
		if(error)
		{
			console.log('Ocorreu um Erro')
			throw error;
		}
		/*for(let r of result)
		{
			let obj = {
				id = r.id,
				name = r.name,
				description = r.description,
				alterName = r.alterName,
				episodes = r.episodes,
				studio = r.studio,
				url = baseUri+r.id
			}
			rows.push(obj);
		}
		
		//console.log(result)
		res.send(JSON.stringify(rows));*/
		//res.send(JSON.stringify(result));
		res.send(result);
	});

}

exports.save = (req,res)=>{

	let st_query = "INSERT INTO anime VALUES (null,?,?,?,?,?)";

	let atributes = [
		req.body.name,
		req.body.description,
		req.body.alterName,
		req.body.episodes,
		req.body.studio
	];

	con.query(st_query,atributes,(error,result)=>{
		if(error)
		{
			console.log(error)
			res.status(200).send({error: "A inserção falhou."})
		}
		else
		{
			console.log("Inserção sucedida")
			res.status(333).send({msg: "Inserção sucedida"})
		}
	});
}

exports.update = (req,res)=>{
	let atributes = [
		req.body.name,
		req.body.description,
		req.body.alterName,
		req.body.episodes,
		req.body.studio,
		req.params.ani_id
	];
	let st_query = "UPDATE anime SET name = ?,description = ?,alterName = ?,episodes = ?,studio = ? WHERE id = ?";
	con.query(st_query,atributes,(error,result)=>{
		if(error)
		{
			console.log(error)
			res.status(200).send({error: "A Atualização falhou."})
		}
		else
		{
			console.log("Atualização Sucesso")
			res.status(333).send({msg: "Atualização Sucesso"})
		}
	});
}

exports.delete =(req,res)=>{
	let anime_id = req.params.ani_id;
	let st_query = "DELETE FROM anime WHERE id = ?";
	con.query(st_query,anime_id,(error,result)=>{
		if(error)
		{
			console.log(error)
			res.status(200).send({error: "A Exclusão falhou"})
		}
		else
		{
			console.log("Exclusão Concluida")
			res.status(333).send({msg: "Exclusão Concluida"})
		}
	});
}

exports.loadById = (req,res)=>{
	let anime_id = req.params.ani_id;
	let st_query = "SELECT * FROM anime WHERE id = ?";
	let rows;
	con.query(st_query,anime_id,(error,result)=>{
		if(error)
		{
			console.log(error)
			res.sendStatus(200).send({error: "A Exclusão falhou"})
		}
		else
		{
			if(result.length == 0)
				res.sendStatus(200).send({error: "Anime não encontrado."})
			else
			{
				//console.log(result.id)
				res.send(result)
				//res.sendStatus(383);
				
			}
		}
	});
}
