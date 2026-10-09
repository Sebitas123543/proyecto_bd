const mysql = require('mysql2');

// Configuracion de la conexion a MySql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "tienda"

});

conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL: " + error);
        return;
    }
    console.log("Conexión exitosa a MySQL");
});

module.exports = conexion;
