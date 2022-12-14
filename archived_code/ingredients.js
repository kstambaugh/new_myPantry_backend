//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)

//Model
class Ingredient extends Model { }

Ingredient.init({
    ingr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ingredient_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inPantry: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    inGrocery: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
}, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients',
    timestamps: false
})

//Export
module.exports = Ingredient