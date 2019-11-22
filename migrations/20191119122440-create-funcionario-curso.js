'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionariocursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comprovante: {
        type: Sequelize.STRING
      },
      dataConclusao: {
        type: Sequelize.DATE
      },
      funcionarioId: {
        type: Sequelize.INTEGER,
        references: { model:'funcionarios', key:'id'},
        onDelete:'CASCADE',
        allowNull:false,
      },
      
      cursoId: {
        type: Sequelize.INTEGER,
        references:{model:'cursos', key:'id'},
        onDelete:'CASCADE',
        allowNull:false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionariocursos');
  }
};