var express = require('express');
var app = express();
var actionController = require('./controllers/actionController')
app.set('view engine', 'ejs');

app.use(express.static('./public'));

actionController(app);



app.listen(8080);

console.log("Yo Dog, We do be listening to Localhost: 8080")
