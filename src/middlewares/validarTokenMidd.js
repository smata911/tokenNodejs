
const jwt = require('jsonwebtoken');
const message=require('../utils/mensajes/allMessages')
//require('dotenv').config();//el .env
function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'];
    if (!accessToken) return res.status(401).send(message.accesDenied);
  
    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).send(message.tokenExpired);
        } else if (err.name === 'JsonWebTokenError') {
          return res.status(401).send(message.tokenInvalid);
        }
      }
  
      const lastActivity = req.session.lastActivity;
     
      console.log(lastActivity);
      
      if (lastActivity && Date.now() - lastActivity > 5000 * 60 * 1000) {
     
        return res.status(401).send(message.tokenInactivy);
      }
  
      req.user = {
        user:user.userName,
        iat:user.iat,
        exp:user.exp
      };
  
      // Actualiza la última actividad del usuario
      req.session.lastActivity = Date.now();
     // console.log(fe - lastActivity);
      next();
    });
  }

  module.exports={validateToken};