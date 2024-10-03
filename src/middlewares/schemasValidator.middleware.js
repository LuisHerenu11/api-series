const schemasValidator = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error){
            return res.status(400).json({
                errores: result.error.details.map(
                    elemento => { return {atributo: elemento.path[0], error: elemento.message}}
                )
            })
        }
        next()
    }
}

module.exports = schemasValidator