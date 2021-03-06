const funcionarios = require('../models').funcionarios;
const cursos = require('../models').cursos;

module.exports = {

   // inserindo no banco
   create :  async (req, res) => {
    try {
      const { fc, ...data } = req.body;
      
      const post = await funcionarios.create(data);
      
      if (fc && fc.length > 0) {
        post.setFc(fc);
      }
  
      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json({err});
    }
  },

   getRestaurant(req, res){
    var restaurantId = req.params.id;
  
    funcionarios.findById(restaurantId).populate({path: 'user'}).exec((err, funcionarios) => {
      if(err){
        res.status(500).send({
          message: 'Error na solicitação'
        });
      }else{
        if(!funcionarios){
          res.status(404).send({
            message: 'Não existe nenhum restaurante nesse registro'
          });
        }else{
          res.status(200).send({
            funcionarios
          });
        }
      }
    });
  },
  
  // update
  put : async (req, res) => {
    
    try {
      //const { id } = req.params;
      const post = await funcionarios.findByPk(req.params.id)
        
  
      const { fc, ...data } = req.body;
      post.update(data);
  
      if (fc && fc.length > 0) {
        post.setFc(fc);
      }
  
      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json({err});
    }
  },

  // listando 
  list: async (req, res) => {
    
    try {
      const posts = await funcionarios.findAll(({
        include: [
          {
            model: cursos,
            as: 'fc',
           through: { attributes: [] },
          },
        ],
      });   
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json({ err });
    }
  },
 
  // deletando 
  destroy(req,res){
    funcionarios.destroy({where: {'id': req.params.id}

      
  }).then(function(){
      //res.redirect('/funcionario')/
      res.send("Funcionario Excluido com sucesso")
  // res.send("Categoria Excluida com Sucesso");
      }).catch(function(erro){
      res.send("erro ao deletar funcionarios");
  
  })},
     
}

    
  //   // inserindo 
  //   create(req, res) {
  //     return funcionarios
  //     .create(req.body)
  //     .then(setor => res.status(201).send(setor))
  //     .catch(error => res.status(400).send(error));
  // },


  // listando 

  
  

  // list(req, res){
  //   funcionarios.findAll({order:[['id','ASC']]}).then(function(listar){
  //     res.send({listar:listar});
  //   });
  
  // },
  //atualizando
  // put(req, res){
  //   funcionarios.findByPk(req.params.id)
  //   .then(o => {
  //     o.update(req.body).then((f) =>res.send(f.dataValues))
  //   })
  // },

  // deletando um registro
  





  