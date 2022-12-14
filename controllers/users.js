const express = require('express')
const users = express.Router()
const User = require('../models/usersModel.js')


//INDEX
users.get('/', (req, res) => {
    res.send(User)
})

//SHOW
users.get('/:arrayIndex', (req, res) => {
    res.send(User[req.params.arrayIndex])
})


module.exports = users