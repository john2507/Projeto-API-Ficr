'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcionariocursos = sequelize.define('funcionariocursos', {
    comprovante: DataTypes.STRING,
    dataConclusao: DataTypes.DATE,
    funcionarioId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {});
  funcionariocursos.associate = function(models) {
    // associations can be defined here
    

  };
  return funcionariocursos;
};