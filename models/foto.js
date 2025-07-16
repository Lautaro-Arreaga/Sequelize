'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    static associate(models) {
      // Asociación con etiquetas (muchos a muchos)
      this.belongsToMany(models.etiqueta, {
        through: 'fotoetiquetas',
        foreignKey: 'foto_id'
      });
    }
  }

  Foto.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    calificacion: DataTypes.FLOAT,
    ruta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foto',
    tableName: 'fotos',
    freezeTableName: true
  });

  return Foto;
};
