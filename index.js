const express = require('express')
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
const app = express();


dotenv.config()

const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate()
    console.log(`Connected with sequelize at ${process.env.PG_URI}`)
} catch (err) {
    console.log(`Unable to connect to PG:${err}`)
}


app.use('/users', require('./controllers/users'))

app.get("/", (req, res) => {
    res.send("hello world");
});


app.get("/*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})



app.listen(process.env.PORT, () => console.log("Sever is listening on port 5000"))
