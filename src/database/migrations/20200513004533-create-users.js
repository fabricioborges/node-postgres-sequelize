'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.createTable('users', 
      { id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      }});    
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.dropTable('users');    
  }
};
