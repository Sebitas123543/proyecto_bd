require("dotenv").config();
const mysql = require('mysql2');

// Configuracion de la conexion a MySql

    const host = process.env.DB_HOST || "localhost";
    const port = Number(process.env.DB_PORT) || 3306;
    const user = process.env.DB_USER || "root";
    const password = process.env.DB_PASSWORD || "";
    const database = process.env.DB_NAME || "tienda"

    const configuracion = {
        host,
        port,
        user,
        password,
        database,
    }
    

    if(host !== "localhostt" && host  !== "127.0.0.1"){
        configuracion.ssl = {
            minVersion: "TLSv1.2",
            rejectUnauhorized: true,

        };
    }

    const conexion = mysql.createConnection(configuracion)


    conexion.connect((error) => {

        if(error){
            console.error("Error al conectar con la Base de datos", error.message);
            return;
        }
        console.log(`conexión exitosa con la base de datos (${host}:${port})`);
    })





module.exports = conexion;
