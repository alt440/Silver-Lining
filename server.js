var express = require('express');
//create instances of web pages or links
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var Request = require("request");

app.set('view engine', 'ejs');

router.get('/', function(req, res){
  res.render('pages/homePage.ejs');
})

router.get('/otherPage.ejs', function(req, res){
  res.render('pages/otherPage.ejs');
})

//setting folder as views folder
app.set('TypeScript', path.join(__dirname, 'TypeScript'));
//enabling css and js
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//to make all webFlow valid from router variable
app.use('/', router);

app.listen(1337); //listens on port 1337
console.log("Server is running on port 1337");

var response = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/year");
console.log(response);
