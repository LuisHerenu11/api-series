const Joi = require('joi')

const seriesSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(3).max(255).messages({
            "any.required":"nombre es requerido",
            "string.base":"nombre debe ser un string",
            "string.min":"nombre debe tener mínimo {#limit} caracteres",
            "string.max":"nombre no puede tener más de {#limit} caracteres",
            "string.empty":"nombre no puede ser vacío"
        }),
        plataforma: Joi.string().valid("Netflix","Disney+","Flow","Max", "Prime Video").required().messages({
            "any.required":"plataforma es requerida",
            "string.base":"plataforma debe ser un string",
            "any.only":"plataformas disponibles son Netflix, Disney+, Flow, Max, Prime Video"
        }),
        disponible: Joi.boolean().required().messages({
            "any.required":"disponible es requerido",
            "boolean.base":"disponible debe ser tipo booleano"
        })
    }
)

module.exports = seriesSchema