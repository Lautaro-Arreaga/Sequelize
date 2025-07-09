'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    static associate(models) {
      // Asociaciones si las necesitas
    }
  }
  Foto.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.FLOAT,
    ruta: DataTypes.STRING  // ya corregido aquí también
  }, {
    sequelize,
    modelName: 'Foto',
    tableName: 'fotos',        // 👈 importante: nombre exacto de la tabla
    freezeTableName: true      // 👈 evita que Sequelize pluralice
  });
  return Foto;
};
