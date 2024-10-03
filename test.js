const seriesSchema = require('./src/schemas/series.schema')

const resultadoValidate = seriesSchema.validate({
    nombre: 'El Encargado',
    plataforma: 'Disney+',
    disponible: true
}, {abortEarly: false}
)

console.log(resultadoValidate)

