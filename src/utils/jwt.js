const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

//require('dotenv').config();//el .env
async function encriptar(password){
    const saltRounds=10;
    const passwordHash=await bcrypt.hash(password,saltRounds);

    return passwordHash;
}

async function comparar(contrasena, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(contrasena, hash)
        .then((result) => {
          if (result) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          reject(error);
        });
    });
  }

  function generateAccessToken(user) {
    
    return jwt.sign(user, process.env.SECRET, { expiresIn: '10000min' })

}



  
module.exports = {
    encriptar,
    comparar,
    generateAccessToken
};