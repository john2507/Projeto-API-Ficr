const funcao = require ( '../models').funcoes;


module.exports ={

    create : async(req,res) =>{

        try{
            const {nome} = req.body;
            const post = await funcao.create({
            nome,
            })
            return res.status(200).send(post);
        }catch(err){
            res.status(400).send({error: err});
        }
    },

// listando
    list (req, res){

        funcao.findAll({order:[['id', 'ASC']]})
        
        .then(function(funcao){
        res.send({funcao:funcao});
        
        })},

    destroy (req, res){

            funcao.destroy({where: {'id' : req.params.id}
            
        }).then(function(){

            res.send("funcao excluidda")

        }).catch(function(erro){
            res.send("Erro ao deletar");
        })

        },

        put(req, res){
            funcao.findByPk(req.params.id)
            .then(o => {
              o.update(req.body).then((f) =>res.send(f.dataValues))
            })
          },
}