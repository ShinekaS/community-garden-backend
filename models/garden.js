'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Garden.init({
    name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    availablePlots: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    announcements: DataTypes.TEXT,
    rules: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Garden',
  });
  return Garden;
};