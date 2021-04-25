const express = require('express')
const path = require('path');

const app = express();


console.log(path.join(__dirname, '../public/staticsite'));

const pathsite = path.join(__dirname, '../public/staticsite');

app.use(express.static(pathsite));


app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})