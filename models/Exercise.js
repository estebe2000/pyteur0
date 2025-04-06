const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Exercise = sequelize.define('Exercise', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  proprietaire: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tags: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Exercise;
