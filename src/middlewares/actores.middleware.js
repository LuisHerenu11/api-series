const { Actores } = require('../models')

const middleware = {}
const validateIdActores = async (req, res, next)=>{
    const id = req.params.id
    const actor = await Actores.findByPk(id)
    console.log(actor) // log visual
    if (!actor)
        return res.status(404).json({mensaje: `El ${id} no existe.`})
    next()
}
middleware.validateIdActores = validateIdActores



module.exports = middleware

