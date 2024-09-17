'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plant.init({
    name: DataTypes.STRING,
    zone: DataTypes.STRING,
    season: DataTypes.STRING,
    water: DataTypes.STRING,
    companion: DataTypes.STRING,
    soil: DataTypes.TEXT,
    harvest: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};