'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init({
    ingr_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ingredient_name: DataTypes.STRING,
    inPantry: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    inGrocery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'Ingredients',
    timestamps: false,



  });
  return Ingredient;
};