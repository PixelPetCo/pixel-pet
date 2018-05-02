const Sequelize = require('sequelize');
const db = require('./database');

const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Pet;
