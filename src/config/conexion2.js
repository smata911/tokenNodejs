const { Sequelize } = require('sequelize');
const message=require('../utils/mensajes/allMessages.js')
const user=process.env.DATABASE
const root=process.env.USER
const password=process.env.PASSWORD
const host=process.env.HOST
const dialect=process.env.DIALECT
const sequelize = new Sequelize(user, root, password, {
  host: host,
  dialect: dialect,
});

// creo que es para que se creen las tablas si es que no existe, aun no pruebo
(async () => {
  try {
    await sequelize.authenticate();
    console.log(message.conexionSucces);
  } catch (error) {
    console.error(message.conexionMistake, error);
  }
})();

module.exports = sequelize;