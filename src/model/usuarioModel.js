const { DataTypes } = require('sequelize');
const db = require('../config/conexion2');

const UserCompany = db.define('usercompany',{
  idUser: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idStatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idEmpl: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
    db,
    modelName: 'UserCompany',
    tableName: 'usercompany',
    timestamps: false // Deshabilita los campos createdAt y updatedAt
  });

module.exports = UserCompany;