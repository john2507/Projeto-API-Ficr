'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};