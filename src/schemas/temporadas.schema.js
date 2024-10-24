const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const temporadaSchema = Joi.object().keys(
    {
        descripcion: Joi.string().required().min(10).max(255).messages({
            "any.required":"descripcion es requerido",
            "string.base":"descripcion debe ser un string",
            "string.min":"descripcion debe tener mínimo {#limit} caracteres",
            "string.max":"descripcion no puede tener más de {#limit} caracteres",
            "string.empty":"descripcion no puede ser vacío"
        }),
        fechaInicio: Joi.string().custom(validateDate).required().messages({
            "any.required":"fechaInicio es requerida",
            "any.custom":"El formato de la fecha debe ser YYYY-MM-DD"
        }),
        capitulos: Joi.number().min(1).max(100).required().messages({
            "any.required":"capitulos es requerido",
            "number.min":"capitulos debe tener como valor mínimo {#limit}",
            "number.max":"capitulos no puede tener como valor máximo más de {#limit}"
        })
    }
)

module.exports = temporadaSchema