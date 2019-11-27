'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcoes = sequelize.define('funcoes', {
    nome: DataTypes.STRING
  }, {});
  funcoes.associate = function(models) {
    // associations can be defined here
    

  funcoes.belongsToMany(models.cursos,{

      through:'funcaocurso',
      as:'funcao',
      foreignKey:'funcaoId',
    })
  }
  return funcoes;
};