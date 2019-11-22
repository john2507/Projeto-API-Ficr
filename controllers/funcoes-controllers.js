const funcoes = require('../models').funcoes;

module.exports = {

    create(req, res){

        return funcoes
        .create({
            nome:req.body.nome,
    }).then(f => res.status(201).send(f))
      .catch(error => res.status(400).send(error))    
}

}