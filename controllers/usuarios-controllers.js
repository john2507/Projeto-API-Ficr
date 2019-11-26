const usuarios = require ('../models').usuarios

module.exports = {


    create : async(req, res) => {

        try{
            const {email, senha } = req.body;
            const post = await usuarios.create({
                email,
                senha,
            }) 
            return res.status(200).send(post);
        }catch(err){
            res.status(400).send({erro : err});
        }
    },

    list (req, res){

        usuarios.findAll({order:[['id', 'ASC']]}).then(function(usuarios){
            res.send({usuarios:usuarios})
        })
    },

    put(req,res){

        usuarios.findByPk(req.params.id)
        .then(usuarios =>{
          usuarios.udpate(req, res)
        .then((usuarios)=>{
            res.send(usuarios.dataValues)
        }).catch(function(erro){
            res.send("erro ao atualizar")
        })  
        })

    },

    destroy(req, res){

        usuarios.destroy({where :{'id': req.params.id}
      
    }).then(function(){
        res.send("Usuarios ecluido com sucesso")
    }).catch(function(erro){
        res.send("Erro ao excluir");
    })
    }



}