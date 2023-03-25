import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

//Se importa DOTENV (dependencia) y se indica el path del archivo .env que tiene las variables de entorno
//en las cuales se ocultan las credenciales de acceso a la DB

//Hide credentials: with entorn variabl

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {

    host: process.env.BD_HOST,
    port: '3306',
    dialect:'mysql',
    define: {
        timestamps: true
    },
    pool:{ //Sirve para seguir utilizando los canales de conexion vivas. Maximo 5 conexiones, 30000 ms tiempo maximo de espera cnx antes de marcar un error, 10000ms para finalizar
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false //Old feature, dont use
})

export default db