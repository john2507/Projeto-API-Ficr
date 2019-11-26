//criando uma cplica��o completa

//
npm init

//  criando o module
npx i 


criando os modulos
consta express = require ('express')

// criano uma variavel para instanciar o modulo
app.express= express();

 consta sequelize = require('sequelize')

// criando os modelos 

npx sequelize-cli init



// criando um projeto vazio
npx sequelize-cli init
criara varias pastas dentro do projeto


// criando o primeira tabela
$ npx sequelize-cli model:generate --name setores --attributes descricao:string
  npx sequelize-cli model:generate --name funcionarios --attributes nome:string,cpf:string,admissao:date,endereco:string,bairro:string,cidade:string,numero:integer,cep:integer,ctps:integer,sexo:string,matricular:integer,setorid:integer,usuarioId:integer,funcaoId:integer
  npx sequelize-cli model:generate --name usuarios --attributes email:string,senha:string
  npx sequelize-cli model:generate --name funcoes --attributes descricao:string
  npx sequelize-cli model:generate --name cursos --attributes descricao:cargaHoraria:string;
  npx sequelize-cli model:generate --name funcaoCurso --attributes idFuncao:integer,idCurso:integer
  npx sequelize-cli model:generate --name funcionarioCurso --attributes comprovante:string,dataConclusao:date,idFuncionario:integer,idCurso:integer


// execultano a tabela no banco 
npx sequelize-cli db:migrate
 
criando uma usuario no banco de dados com o NODE

// digita node
node

// chama o models 
models = require("./models/")

// seta a tabela
 setores = models.setores
funcionario = models.funcionarios

//adiciona os campos na tabela 

// post 
setores.create({descricao:"tecnologia"})
// list funcionarios.findByPk(1,{include:[setores]}).then(p => console.log(p.dataValues))
// put  funcionarios.findByPk(1).then(p => p.update({nome: "katarina"})

// consultando no banco de dados 

