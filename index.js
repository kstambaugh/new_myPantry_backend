const express = require('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()


app.use('/users', require('./controllers/users'))

app.get("/", (req, res) => {
    res.send("hello world");
});


app.get("/*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})



app.listen(process.env.PORT, () => console.log("Sever is listening on port 5000"))
