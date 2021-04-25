const express = require('express')
const path = require('path');
const hbs = require("hbs")
const app = express();


// console.log(path.join(__dirname, '../public/staticsite'));
// middleware
// const pathsite = path.join(__dirname, '../public/staticsite');
const pathsite = path.join(__dirname, '../public');
const templatepath = path.join(__dirname, '../template/views');
const partialspath = path.join(__dirname, '../template/partials');
// set template engine
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialspath)
app.use(express.static(pathsite));

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "shubham"
    })
})
app.get("/about", (req, res) => {
    console.log(req.query.name)
    res.render("about", {
        name: "shubham",
        name2: req.query.name
    })
})


app.get("/", (req, res) => {
    res.send("hello from the express")
})

// error page 404 
app.get("*", (req, res) => {
    res.render("404", {
        err: "oops page doesn't exists"
    });
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})


// nodemon src/vdo5.js -e js,hbs