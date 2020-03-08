var bodyParser = require('body-parser');

var data = [];
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

app.post('/', urlencodedParser, function(req, res){
   let obj = (req.body);
   console.log(req.body);
   data.push(obj);
});


app.get('/', function(req, res){
    res.render('test');
});


};