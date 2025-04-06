const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Classe = sequelize.define('Classe', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  niveau: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Classe;
