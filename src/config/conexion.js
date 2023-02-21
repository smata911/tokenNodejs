const mysql =require('mysql');

const conexion =mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    port:process.env.password,
    database:process.env.database

});

conexion.connect((err)=>{

    if(err){
        console.log('error por '+err)
    }
    else{
      console.log('se conecto');
    }

});

//lo exportamos para que funcione en todo el proyecto

module.exports=conexion;