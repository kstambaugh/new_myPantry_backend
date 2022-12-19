const express = require('express')
const defineCurrentUser = require('../middleware/defineCurrentUser')
const ingredients = express.Router()
const db = require('../models')
const { Ingredient } = db

//find all ingredients
ingredients.get('/', async (req, res) => {
    const foundIngredient = await Ingredient.findAll()
    res.json(foundIngredient)
})

//find all ingredients belonging to current user
ingredients.get('/:id', async (req, res) => {
    const foundUserIngredient = await Ingredient.findAll({
        where: {
            user_id: req.params.id
        }
    })
    res.status(200).json(foundUserIngredient)

})

//add new ingredient
ingredients.post('/', async (req, res) => {
    const newIngredient = await Ingredient.create({
        ...req.body,
        ingredient_name: req.body.ingredient_name,
        user_id: req.body.user_id
    })
    res.json(newIngredient)

})

ingredients.put('/:ingr_id', async (req, res) => {
    const findIngredient = await Ingredient.findByPk(req.params.ingr_id)
    findIngredient.update(
        { inPantry: req.body.inPantry },
        { inGrocery: req.body.inGrocery },
    )
    res.json(findIngredient)

})

//delete an ingredient
ingredients.delete('/:id')


module.exports = ingredients