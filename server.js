var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

router.get('/', function(req, res){
  res.sendFile(__dirname+'/homePage.html');
})

router.get('/otherPage.html', function(req, res){
  res.sendFile(__dirname+'/otherPage.html');
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
