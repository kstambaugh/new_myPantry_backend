const express = require('express')
const ingrs = express.Router()
const db = require('../models')
const { Ingredient } = db

//find all ingredients
ingrs.get('/', async (req, res) => {

    try {
        const foundIngr = await Ingredient.findAll()
        res.status(400).json(foundIngr)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


module.exports = ingrs