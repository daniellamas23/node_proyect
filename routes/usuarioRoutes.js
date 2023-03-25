import express from 'express'
import { formularioLogin , formularioRegister , formForgotpwd , register  } from '../controllers/usuarioControler.js'



const router = express.Router()
router.get('/', function (req, res) {
    res.send('Bienvenidos a mi web')

})

router.get('/login', formularioLogin /* function (req, res) {
    res.send('Mi primer servidor EXPRESS')
    res.json({nombre:'Daniel',surname:'Lamas', age: null, direction: undefined, active: true}) //se puede mandar un JSON como respuesta
    res.render('auth/login', {
        autenticado: false
    }) */

)
router.get('/register', formularioRegister)

router.post('/register', register)

router.get('/forgotpwd', formForgotpwd)



export default router