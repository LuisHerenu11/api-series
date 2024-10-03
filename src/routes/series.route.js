const { Router } = require('express')
const seriesController= require('../controllers/series.controller')
const {seriesMiddleware} = require('../middlewares')
const schemasValidator = require('../middlewares/schemasValidator.middleware')
const seriesSchema = require('../schemas/series.schema')
const route = Router()

route.post('/series', schemasValidator(seriesSchema), seriesController.createSerie)

route.get('/series', seriesController.getAllSeries )

route.get('/series/:id', seriesMiddleware.validateIdSerie, seriesController.getSerieById)

route.delete('/series/:id', seriesMiddleware.validateIdSerie, seriesController.deleteById)

route.put('/series/:id', schemasValidator(seriesSchema), seriesMiddleware.validateIdSerie, seriesController.updateSerie)

module.exports = route