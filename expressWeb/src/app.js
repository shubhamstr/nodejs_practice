const express = require('express');
const app = express();

const port = process.env.PORT || 8000

app.get("", (req, res) => {
    res.send("welcome my site");
});

app.get("/about", (req, res) => {
    res.send("welcome my about page");
});

app.get("/weather", (req, res) => {
    res.send("welcome my weather page");
});


app.get("*", (req, res) => {
    res.send("404 page");
});

app.listen(port, () => {
    console.log("listening port");
    console.log("http://localhost:8000");
});