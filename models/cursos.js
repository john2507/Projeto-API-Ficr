'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursos = sequelize.define('cursos', {
    nome: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING
  }, {});
  cursos.associate = function(models) {
    cursos.belongsToMany(models.funcionarios,{

      through:'funcionariocursos',
      as:'posts',
      foreignKey:'cursoId',
      
    })

    
  };
  return cursos;
};
    // associations can be defined here
  
    // cursos.belongsToMany(models.funcoes,{

    //   through:'funcaocurso',
    //   as:'curso',
    //   foreignKey:'cursoId',
      
    // })
    