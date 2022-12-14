const express = require('express')
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
const app = express();
const db = require('./models');



dotenv.config()




app.get("/", (req, res) => {
    res.send("hello world");
});

//Controllers
const usersController = require('./controllers/users_controller')
app.use('/users', usersController)
const ingredientsController = require('./controllers/ingredients_controller');
app.use('/ingredients', ingredientsController)




app.get("/*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT, () => console.log("db synced, Server is listening on port 50000"))

