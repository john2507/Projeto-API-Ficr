'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const funcionarios = sequelize.define('funcionarios', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    admissao: DataTypes.DATE,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    ctps: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    matricular: DataTypes.INTEGER,
    setorid: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    funcaoId: DataTypes.INTEGER
  }, {});
  funcionarios.associate = function(models) {
    // associations can be defined here
    funcionarios.belongsTo(models.setor)
  // ddefinindo um relacionamento de muitos para muitos belongsToMany
  // o funcionarios tem um relacionamento com o cursos de n:n 
  funcionarios.belongsToMany(models.cursos,{
    through:'funcionariocursos',
    as:'cursos',
    foreignKey:'funcionarioId',
    
  })

}
  return funcionarios;
}