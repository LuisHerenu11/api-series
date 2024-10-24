const { Router } = require('express')
const seriesController = require('../controllers/series.controller')
const {seriesMiddleware} = require('../middlewares')
const schemasValidator = require('../middlewares/schemasValidator.middleware')
const seriesSchema = require('../schemas/series.schema')
const temporadasSchema = require('../schemas/temporadas.schema')
const temporadasController = require('../controllers/temporadas.controller')
const controller = require('../controllers/series.controller')
const route = Router()

route.post('/series', schemasValidator(seriesSchema), seriesController.createSerie)

route.get('/series', seriesController.getAllSeries )

route.get('/seriesYActores', seriesController.getAllSeriesYActores )

route.get('/series/:id', seriesMiddleware.validateIdSerie, seriesController.getSerieById)

route.get('/series/:id/temporadas', seriesMiddleware.validateIdSerie, temporadasController.getTemporadasBySerie)

route.delete('/series/:id', seriesMiddleware.validateIdSerie, seriesController.deleteById)

route.post('/series/:id/temporadas', seriesMiddleware.validateIdSerie, schemasValidator(temporadasSchema), temporadasController.createTemporada)

route.put('/series/:id', schemasValidator(seriesSchema), seriesMiddleware.validateIdSerie, seriesController.updateSerie)

route.post('/series/:id/actores', controller.addActorById)


module.exports = route