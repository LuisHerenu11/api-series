const { Router } = require('express')
const actoresController = require('../controllers/actores.controller')
const {actoresMiddleware} = require('../middlewares')
const schemasValidator = require('../middlewares/schemasValidator.middleware')
//const actoresSchema = require('../schemas/actores.schema')
//const temporadasSchema = require('../schemas/temporadas.schema')
// const temporadasController = require('../controllers/temporadas.controller')
const route = Router()

route.get('/actores', actoresController.getAllActores)

route.get("/actoresYSeries",actoresController.getAllActoresYSeries)

route.get('/actores/:id', actoresMiddleware.validateIdActores, actoresController.getActorById)

route.delete('/actores/:id', actoresMiddleware.validateIdActores, actoresController.deleteActorById)

route.post('/actores', actoresController.createActor)

route.put('/actores/:id', actoresMiddleware.validateIdActores, actoresController.updateActorById)



module.exports = route