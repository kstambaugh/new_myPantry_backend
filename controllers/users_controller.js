const express = require('express')
const users = express.Router()
const db = require('../models')
const { User } = db


//INDEX
users.get('/', async (req, res) => {
    try {
        const foundUser = await User.findAll();
        res.status(400).json(foundUser);
    } catch (error) {
        console.log("error message", error)
        res.status(500).json(error)
    }

})

module.exports = users