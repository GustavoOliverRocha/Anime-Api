const express = require('express');
const anime = require('./../controller/animeController.js');
const router = express.Router();


//router.get('/',anime.show);
router.get('/anime/list',anime.show);
router.get('/anime/id/:ani_id',anime.loadById);
router.post('/anime/save',anime.save);
router.put('/anime/update/:ani_id',anime.update);
router.delete('/anime/destroy/:ani_id',anime.delete);

/*router.get('/teste',function(req,res){
	res.send("Testeeee");
	console.log("Rota: teste");
});*/

module.exports = router