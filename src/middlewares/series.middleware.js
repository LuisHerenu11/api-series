//const { series } = require('../controllers/series.controller')
const { Series } = require('../models')

const middleware = {}
const validateIdSerie = async (req, res, next)=>{
    const id = req.params.id
    //const serie = series.find( serie => serie.id == id)
    const serie = await Series.findByPk(id)
    console.log(serie) // log visual
    if (!serie)
        return res.status(404).json({mensaje: `El ${id} no existe.`})
    next()
}
middleware.validateIdSerie = validateIdSerie



module.exports = middleware

