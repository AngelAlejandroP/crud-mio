var con=require('mysql');
var mysql=con.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'equipo_serpiente'
});

mysql.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

mysql.end();