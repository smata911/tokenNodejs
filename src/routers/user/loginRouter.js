const express = require('express');
const routerLogin = express.Router();

const UserCompany=require('../../model/usuarioModel.js')
// const validarError = require('../../utils/mensajes/messageCRUD/errores');
// const validarSuccefull = require('../../utils/mensajes/messageCRUD/succes');
// const app = express();
// Configura express-session
const { comparar, generateAccessToken } = require('../../utils/jwt');
const message = require('../../utils/mensajes/allMessages');
routerLogin.use(express.json());

routerLogin.post('/', async (req, res) => {
    const { userName, password } = req.body;
  
    try {

      const user = await UserCompany.findOne({//consulta orm
        where: { userName: userName },
        attributes: ['idUser', 'userName', 'password']
      });
  
      if (user) {
        const match = await comparar(password, user.password);
  
        if (match) {
          const token = generateAccessToken({ idUser: user.idUser, userName: user.userName });
  
          res.status(200).json({
            msj: message.conexionSucces,
            token: token
          });
        } else {
          res.status(204).json({
            msj: message.user_not_found
          });
        }
      } else {
        res.status(204).json({
          msj: message.tokenInvalid
        });
      }
    } catch (error) {
        
      console.error(error);
      res.status(500).json({
        msj: message.mistakeServer
      });

    }

  });




module.exports = routerLogin;