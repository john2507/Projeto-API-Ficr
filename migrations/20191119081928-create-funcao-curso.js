'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcaocurso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcaoId: {
        type: Sequelize.INTEGER,
        references:{model:'funcoes', key:'id'},
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
    return queryInterface.dropTable('funcaocurso');
  }
};