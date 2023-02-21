const { DataTypes } = require('sequelize');
const db = require('../config/conexion2');

const solocontoken = db.define('solocontoken',{
  idsolotoken: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  infoImportante: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
    db,
    modelName: 'solocontoken',
    tableName: 'solocontoken',
    timestamps: false // Deshabilita los campos createdAt y updatedAt
  });

module.exports = solocontoken;