const express = require('express')
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrentUser')
const cookieSession = require('cookie-session')


dotenv.config()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(defineCurrentUser)
app.get("/", (req, res) => {
    res.send("hello world");
});


app.use('/users', require('./controllers/users_controller'))
app.use('/ingredients', require('./controllers/ingredients_controller'))
app.use('/authentication', require('./controllers/authentication'))

app.get("/*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT, () => console.log("Server is listening on port 5000"))

