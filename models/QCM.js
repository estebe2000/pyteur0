const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const QCM = sequelize.define('QCM', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  questions: {
    type: DataTypes.JSON,
    allowNull: false
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = QCM;
