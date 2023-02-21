const mysql =require('mysql');

const conexion =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'B@rcelona911',
    port:3306,
    database:'user'

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