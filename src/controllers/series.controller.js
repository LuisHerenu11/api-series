// const series = require('../../data/series.json')
// cuando termine de reemplazar las ocurrencias de series por Series, borrar la variable de arriba.
const { Series, Temporada, Capitulo, Actores } = require('../models')
const controller = {}
// controller.series = series  DEPRECATED XD


const getAllSeries = async (req, res)=>{
    const data = await Series.findAll({})
    res.status(200).json(data)
}
controller.getAllSeries = getAllSeries

const getAllSeriesYActores = async(req,res) => {
    const series = await Series.findAll({order: [['nombre','ASC']],
        include: [{
            model: Actores
        }]
    },
    )
    res.status(200).json(series)
}
controller.getAllSeriesYActores = getAllSeriesYActores

const getSerieById= async (req, res)=>{
    const id = req.params.id
    // const serie = series.find( serie => serie.id==id)
    const serie = await Series.findOne({ 
        where: {id},
        //include: 'temporadas'
        include: {
            model: Temporada,
            as: 'temporadas',
            include:{
                model: Capitulo,
                as: 'episodios'
            }
        }
    })
    res.status(200).json(serie)
}
controller.getSerieById = getSerieById

const deleteById = async (req, res) => {
    const idSerie = req.params.id
    //const idx = series.findIndex( serie => serie.id == id)
    //series.splice(idx, 1)
    const filasAfectadas = await Series.destroy( {where: {id:idSerie} })
    res.status(204).json({mensaje: `filas afectadas ${filasAfectadas}`})
}
controller.deleteById = deleteById

const createSerie = async (req, res) => {
    const {nombre, plataforma, disponible} = req.body
    //const ids = series.map( serie => serie.id)
    //id: ids.length == 0 ? 1 : Math.max( ...ids  ) + 1,
    /* const nuevaSerie = {
        nombre,
        plataforma,
        disponible: false
    }*/
    //series.push(serie)

    const nuevaSerie = await Series.create({
        nombre, 
        plataforma, 
        disponible
    })
    res.status(201).json(nuevaSerie)
}
controller.createSerie = createSerie

const updateSerie = async (req,res) => {
    const {nombre, plataforma, disponible} = req.body
    const idSerie = req.params.id
    const serieActualizar = await Series.findByPk(idSerie)
    serieActualizar.nombre = nombre
    serieActualizar.plataforma = plataforma
    serieActualizar.disponible = disponible
    await serieActualizar.save()
    res.status(200).json(serieActualizar)
}
controller.updateSerie = updateSerie

const addActorById= async (req,res) => {
    const {id} = req.params // ID SERIE
    const {actorId} = req.body  // ID ACTOR
    const serie = await Series.findByPk(id) 
    const actor = await Actores.findByPk(actorId)
    const serieActor = await serie.addActores(actor)
    res.status(200).json(serieActor) 
}
controller.addActorById = addActorById 

module.exports = controller