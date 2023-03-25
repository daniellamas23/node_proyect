import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
//Imports


//Create App
const app = express()
//Form read
app.use(express.urlencoded({extended:true}))

//Connection to DB
try {
    await db.authenticate()
    db.sync()  //Si no existe la tabla, la crea al enviar formulario
    console.log('Connection successful!!')
    } catch (error) {
        console.log(error)
    }


//Set Port
const port = 3000


//Routing

//app.get('/', usuarioRoutes)  app.get means “Run this on a GET request, for the given URL”
app.use('/', usuarioRoutes) // app.use means “Run this on ALL requests” and inside usuarioRoutes.js are the path's

//Habilitar PUG
app.set('view engine', 'pug')  //set is to add config's
app.set('views', './views')

//Public access folder
app.use(express.static('public'))

app.listen(port, () => {

    console.log(`Server is running on port ${port}`)



})