const { Sequelize } = require('sequelize');
const message=require('../utils/mensajes/allMessages.js')

const sequelize = new Sequelize('user', 'root', 'B@rcelona911', {
  host: 'localhost',
  dialect: 'mysql',
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