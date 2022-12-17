const express = require('express')
const users = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const { User } = db



users.post('/register', async (req, res) => {
    let { password, ...rest } = req.body
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})



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