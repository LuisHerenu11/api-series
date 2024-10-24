'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // El segundo atributo de los métodos de relaciones es un objeto para configurar propiedades ejemplo FK.
    static associate(models) {
      Series.hasMany(models.Temporada, {
        foreignKey: 'serieId',
        as: 'temporadas'
      }),
      Series.belongsToMany(models.Actores, {
        through: 'SerieActores'
      })  
    }
  }
  Series.init({
    nombre: DataTypes.STRING,
    plataforma: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Series',
    tableName: 'Series'
  });
  return Series;
};