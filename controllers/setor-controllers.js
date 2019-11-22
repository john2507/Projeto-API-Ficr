  
  
  const setor = require('../models').setor;

  module.exports = {

    
  create(req, res) {
    
      return setor
        .create({
          nome: req.body.nome,
        })
        .then(setor => res.status(201).send(setor))
        .catch(error => res.status(400).send(error));
    },
  
    list(req,res){
      setor.findAll({order:[['id', 'ASC']]}).then(function(listar){
        res.send({listar:listar});
    
    }) 
  }
  }