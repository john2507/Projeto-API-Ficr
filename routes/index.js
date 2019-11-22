const todosController = require('../controllers').todos;
const setoresController = require('../controllers').setor;
const funcController = require('../controllers').funcionarios;
const cursocontroller = require('../controllers').cursos;
const funcoesController = require('../controllers').funcoes;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome post para insert the Todos API!',
  }));

  // todos
  app.post('/api/todos', todosController.create);
  app.get('/api/todos',  todosController.list);
  app.delete('/api/todos/:id', todosController.destroy);


  // setores
  app.post('/api/setor', setoresController.create);
  app.get('/api/setor', setoresController.list);
  
  
  // funcionarios
  app.post('/api/todos/funcionarios', funcController.create);
  app.get('/api/todos/funcionarios', funcController.list)
  app.put('/api/todos/funcionarios/:id', funcController.put)
  app.delete('/api/todos/funcionarios/:id', funcController.destroy)
 
// cursos 
  app.post('/api/cursos', cursocontroller.create);

// funcoes 
app.post('/api/funcoes', funcoesController.create);


};