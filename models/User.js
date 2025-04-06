const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  },
  niveau: {
    type: DataTypes.STRING,
    allowNull: true
  },
  classe: {
    type: DataTypes.STRING,
    allowNull: true
  },
  groupe: {
    type: DataTypes.STRING,
    allowNull: true
  },
  besoin_particulier: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = User;
