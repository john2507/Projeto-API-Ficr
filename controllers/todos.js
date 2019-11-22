const Todo = require('../models').Todo;

module.exports = {
   
  // inserindo no bando de dados e fvalidando os dados
  create(req, res) {
    
    //var erros = []
  
    if(!req.body.title || typeof req.body.title == undefined || req.body.title == null ){
        res.send("Favor Preencha o nome")
    }
   
    if(req.body.title.length < 3){
        res.send("O nome Precisar ter mais de 3 caracteres");
        
  }else {
    
     Todo.create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  
      }
  },
    
  // listando todo os registro por ordem crecente ID
list(req,res){
  Todo.findAll({order:[['id','ASC']]}).then(function(listar){
    res.send({listar:listar});

      })
  },

  // deletando um registro
  destroy(req,res){
  Todo.destroy({
    where: {'id': req.params.id}
}).then(function(){
    //res.redirect('/funcionario')/
    res.send("Funcionario Excluido com sucesso")
// res.send("Categoria Excluida com Sucesso");
    }).catch(function(erro){
    res.send("erro ao deletar");

})},

    // list(req, res) {
    //   return Todo
    //     .all()
    //     .then(todo => res.status(200).send(todo))
    //     .catch(error => res.status(400).send(error));
    // },

};