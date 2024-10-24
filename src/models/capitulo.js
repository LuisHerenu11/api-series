'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Capitulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Capitulo.belongsTo(models.Temporada,{
        foreignKey: 'temporadaId',
        as:'temporada'
      })
    }
  }
  Capitulo.init({
    nombre: DataTypes.STRING,
    duracion: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Capitulo',
    timestamps: false
  });
  return Capitulo;
};