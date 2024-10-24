'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temporada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Temporada.belongsTo(models.Series,{
        foreignKey: 'serieId',
        as:'serie'
      })
      Temporada.hasMany(models.Capitulo, {
        foreignKey: 'temporadaId',
        as: 'episodios'
      })
    }
  }
  Temporada.init({
    descripcion: {type: DataTypes.STRING, allowNull: false},
    fechaInicio: {type: DataTypes.DATEONLY, allowNull: false},
    capitulos: {type: DataTypes.NUMBER, allowNull: false},
    antiguedad: {
      type: new DataTypes.VIRTUAL(DataTypes.NUMBER, ['fechaInicio']),
      get: function() {
        return Math.floor( (new Date() - new Date(this.get('fechaInicio')))  / (1000 * 60 * 60 * 24 * 365.25))
      }
    }
  }, {
    sequelize,
    modelName: 'Temporada',
    timestamps: false
  });
  return Temporada;
};