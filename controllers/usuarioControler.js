import Usuario from '../models/User.js'
import { check, validationResult } from 'express-validator'

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        page: 'Login'
    })
}

const formularioRegister = (req, res) => {
    res.render('auth/register', {
        page: 'Create Account'
    })
}

const register = async (req, res) => {

    //Server-side validation made with EXPRESS-VALIDATOR:
    await check('name').notEmpty().withMessage('Debes ingresar un nombre').run(req)
    await check('email').isEmail().withMessage('Debes ingresar un Email').run(req)
    await check('password').notEmpty().isLength({ min: 6 }).withMessage('Debes ingresar un password de mas de 6 digitos').run(req)
    console.log(req.body)
    await check('password2').equals(req.body.password).withMessage('Los passwords no son iguales').run(req)


    let resultado = validationResult(req)

       //Verify if validationResult is empty or show errors
    if (!resultado.isEmpty()) {   //Errores
        return res.render('auth/register', {
            page: 'Crear cuenta',
            errors: resultado.array(),
            usuario: {
                name: req.body.name,
                email: req.body.email
            }
        })
    }
    //Validator: if email exists, send msg
    const existeUsuario = await Usuario.findOne({where: {email: req.body.email }})
    if(existeUsuario) {
        return res.render('auth/register', {
            page: 'Crear cuenta',
            errors: [{msg:'This email already exists'}], //Creating array 'in action'
            usuario: {
                name: req.body.name,
                email: req.body.email}

    })}
       console.log(existeUsuario)
    return
    const usuario = await Usuario.create(req.body)
  
}


    //Verify if email exists in DB




const formForgotpwd = (req, res) => {
    res.render('auth/forgotpwd', {
        page: 'Password Recovery'
    })
}

export {
    formularioLogin,
    formularioRegister,
    formForgotpwd,
    register
}