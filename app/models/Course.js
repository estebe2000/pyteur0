const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Course = sequelize.define('Course', {
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
    type: DataTypes.TEXT, // chaîne JSON ou texte séparé par virgules
    allowNull: true
  }
});

module.exports = Course;
