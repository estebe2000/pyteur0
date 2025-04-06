const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Result = sequelize.define('Result', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  qcmId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  exerciseId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Result;
