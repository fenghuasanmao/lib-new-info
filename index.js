var express = require('express');
var app = express();
app.set("view engine","ejs");
 
const result = require("./news.json")

const hostname = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
    res.render('index', {result: result});
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
