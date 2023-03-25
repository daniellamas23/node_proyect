import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

//SEQUELIZE CODE ORM
//need npm i dcrypt
//Define new model. Creation of User DB Model
const Usuario = db.define('usuarios', {
    name: {
        type: DataTypes.STRING, //VARCHAR mysql?
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        confirmado: DataTypes.BOOLEAN
    }, 
        hooks: {
            //Sequelize hook
            beforeCreate: async function(usuario) {
                const salt = await bcrypt.genSalt(10)
                usuario.password = await bcrypt.hash( usuario.password, salt);
            }
        }  


})

export default Usuario