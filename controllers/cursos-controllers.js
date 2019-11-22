const cursos = require('../models').cursos;

module.exports = {

 create(req,res){
     return cursos
     .create({
         nome:req.body.nome,
     }).then(c => res.status(201).send(c))
       .catch(error=> res.status(400).send(error));
 },


}