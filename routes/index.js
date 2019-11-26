const todosController = require('../controllers').todos;
const setoresController = require('../controllers').setor;
const funcController = require('../controllers').funcionarios;
const cursocontroller = require('../controllers').cursos;
const funcoesController = require('../controllers').funcoes;
const usuariosController = require('../controllers').usuarios;
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
  app.delete('/api/setor/:id', setoresController.destroy);
  app.put('/api/setor/:id', setoresController.put)
  
  // funcionarios
  app.post('/api/todos/funcionarios', funcController.create);
  app.get('/api/todos/funcionarios', funcController.list)
  app.get('/api/todos/funcionarios/:id', funcController.list)
  app.put('/api/todos/funcionarios/:id', funcController.put)
  app.delete('/api/todos/funcionarios/:id', funcController.destroy)

// cursos 
  app.post('/api/cursos', cursocontroller.create);
  app.get('/api/cursos', cursocontroller.list);
  app.delete('/api/cursos/:id', cursocontroller.destroy);
  app.put('/api/cursos/:id', cursocontroller.put);

// funcoes 
app.post('/api/funcoes', funcoesController.create);
app.put('/api/funcoes/:id',funcoesController.put);
app.delete('/api/funcoes/:id', funcoesController.destroy);
app.get('/api/funcoes', funcoesController.list);

// usuarios
app.post('/api/usuarios',usuariosController.create);
app.put('/api/usuatios/:id', usuariosController.put);
app.get('/api/usuarios', usuariosController.list);
app.delete('/api/usuarios/:id',usuariosController.destroy);


};