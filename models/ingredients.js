//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)
import User from './usersModel';



//Model
class Ingredient extends Model { }

Ingredient.init({
    id: {
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
        references: {
            model: User,
            key: 'id'
        }

    },
}, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients',
    timestamps: false
})

//Export
module.exports = Ingredient