const express = require('express')
const dotevn = require('dotenv')
dotevn.config()


const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});



app.listen(5000, () => console.log("Sever is listening on port 5000"))
