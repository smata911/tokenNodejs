const conexion = require('../../src/config/conexion2.js');

const { v4: uuidv4 } = require('uuid');
// const validarError = require('../utils/mensajes/messageCRUD/errores');
// const validarSuccefull = require('../utils/mensajes/messageCRUD/succes');
const {encriptar} = require('../utils/jwt');
const  UserCompany  = require('../model/usuarioModel');


  //const action = 'insert';



  async function createUser(req, res) {

    const { userName, password, idEmpl } = req.body;
    try {

      const nuevo = UserCompany.build({
        idUser: uuidv4(),
        userName: userName,
        password: await encriptar(password),
        idStatus: 1,
        idEmpl: idEmpl,
      });
      nuevo.save()
        .then(async() => { 
          res.status(201).json({message:'se ha guardado'});
        })
        .catch((error) => {
          console.error('Error al guardar usuario:', error);
          res.status(500).json({ message: 'Ocurrió un error al guardar el usuario' }); // here should to save in mysql
        });

    } catch (error) {
      // Manejar el error que podría ocurrir al encriptar la contraseña
      res.json({message: error});
    }
  }


module.exports = {
  createUser
 
};