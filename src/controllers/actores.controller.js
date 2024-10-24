const {Actores, Series} = require('../models')
const controller = {}
// controller.actores = Actores  DEPRECATED XD


const getAllActores = async (req, res)=>{
    const actores = await Actores.findAll({})
    res.status(200).json(actores)
}
controller.getAllActores = getAllActores

const getAllActoresYSeries = async (req, res) => {
    const actores = await Actores.findAll({
        include:[{
            model:Series
        }]
    })
    res.status(200).json(actores)
}
controller.getAllActoresYSeries = getAllActoresYSeries

const getActorById= async (req, res)=>{
    const id = req.params.id
    const actor = await Actores.findByPk(id)
    res.status(200).json(actor)
}
controller.getActorById = getActorById

const deleteActorById = async (req, res) => {
    const idActor = req.params.id
    const filasAfectadas = await Actores.destroy( {where: {id:idActor} })
    res.status(204).json({mensaje: `filas afectadas ${filasAfectadas}`})
}
controller.deleteActorById = deleteActorById

const createActor = async (req, res) => {
    const {nombre, apellido, edad} = req.body
    const nuevoActor = await Actores.create({
        nombre, 
        apellido, 
        edad
    })
    await nuevoActor.save()
    res.status(201).json(nuevoActor)
}
controller.createActor = createActor

const updateActorById = async (req,res) => {
    const {nombre, apellido, edad} = req.body
    const idActor = req.params.id
    const actorActualizar = await Actores.findByPk(idActor)
    actorActualizar.update({
        nombre, apellido, edad
    })
    await actorActualizar.save()
    res.status(200).json(actorActualizar)
}
controller.updateActorById = updateActorById

module.exports = controller