const cursos = require('../models').cursos;

module.exports = {

 create : async(req, res) =>{

    try{
        const {nome} = req.body;
        const post = await cursos.create({
        nome,
        })
        return res.status(200).send(post);
    }catch (err){
        return res.status(400).send({error: err});
    } },


    list(req, res){
        cursos.findAll({order:[['id','ASC']]}).then(function(setor){
            res.send({setor:setor});
        })
    },


    //atualizando

    put(req, res){
        cursos.findByPk(req.params.id)
        .then(curso =>{
        curso.update(req.body)
        .then((c) =>
        res.send(c.dataValues));
        }).catch(function(erro){
            res.send("erro ao atualizar")
        })
    },

    destroy(req, res){

        cursos.destroy({where: {'id': req.params.id}

        }).then(function(a){
            
            res.send ("Curso excluido com sucesso");
          
        }).catch(function(erro){
            res.send("erro ao deletar o curso")
        })
    }

    

   
    
}