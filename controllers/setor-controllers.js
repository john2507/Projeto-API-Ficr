  
  
  const setor = require('../models').setor;

  module.exports = {

    
    create : async(req, res)=>{
      try{
           const {nome} = req.body;
           const post = await setor.create({
            nome,
           
          })
           return res.status(200).send(post);
      } catch (err) {
          return res.status(400).send({error :err});
      }
  },

    list (req,res){
      setor.findAll({order:[['id', 'ASC']]}).then(function(listar){
        res.send({listar:listar});
    
    }) 
  },
  
  //atualizando
  put(req, res){
    setor.findByPk(req.params.id)
    .then(o => {
      o.update(req.body).then((f) =>res.send(f.dataValues))
    })
  },

  
  destroy(req,res){
    
    setor.destroy({where: {'id': req.params.id}

  }).then(function(){
      //res.redirect('/funcionario')/
      res.send("setor excluido com sucesso")
  // res.send("Categoria Excluida com Sucesso");
      }).catch(function(erro){
      res.send("erro ao deletar setor");
  
  })},

  }