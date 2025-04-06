const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Groupe = sequelize.define('Groupe', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  classeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Groupe;
