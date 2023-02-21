
const express = require('express');
const app = express();
const PORT = (process.env.port || 3000);
const session = require('express-session');
require('dotenv').config();//el .env
app.use(express.urlencoded({ extended: false }));//investiga mas
app.use(express.json());//para enviar post

// (async()=>{ creo que es para que se creen las tablas si es que no existe, aun no pruebo
// try {
//     await conexion.authenticate()
//     await conexion.sync();
//     console.log('todo bien')
// } catch (error) {
//    console.log(error);
// }
// })()

app.use(session({
    secret:  process.env.SECRETS,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));



app.get('/', (req, res) => {
    res.send('hola munado');
});

//router para vincularlos por ruta
const routerUser=require('./src/routers/user/usuariosRouter.js');
app.use('/api/v1/usuario',routerUser);

const routerLogin=require('./src/routers/user/loginRouter.js');
app.use('/api/v1/login',routerLogin);


const routerConToken=require('./src/routers/user/conTokenRouter');
app.use('/api/v1/usuario/conToken',routerConToken);




app.listen(PORT, () => {
    console.log(`servidor iniciado ${PORT}`);
});