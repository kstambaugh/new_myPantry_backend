const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /users')
})


module.exports = router