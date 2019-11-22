'use strict';
module.exports = (sequelize, DataTypes) => {
  const setor = sequelize.define('setor', {
    nome: DataTypes.STRING
  }, {});
  setor.associate = function(models) {
    // associations can be defined here
    // hasMany
    setor.hasMany(models.funcionarios)
  };
  return setor;
};