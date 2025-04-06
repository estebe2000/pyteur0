const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Exercise = sequelize.define('Exercise', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Exercise;
