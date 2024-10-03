const express = require('express')
const routes = require('./routes')
const {genericMiddleware} = require('./middlewares')
const db = require('./models')
const app = express()
const PORT = 3001

app.use(express.json())

app.use(genericMiddleware.requestTime)
app.use(routes.seriesRoute)
app.use(routes.usuariosRoute)
app.listen(PORT, async ()=>{
    console.log(`Aplicación iniciada en el puerto ${PORT}`)
    // Esto lo hacemos solo en desarrollo para sincronizar el modelo con la db.
    // Descomentar solo cuando hay cambios en el modelo.
    // OJO: la sincronización forzada dropea todas las tablas (irreversible)
    //db.sequelize.sync({force:true})
})