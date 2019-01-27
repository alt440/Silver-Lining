var express = require('express');
//create instances of web pages or links
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var Request = require("request");
var parseString = require('xml2js').parseString;
var jsonQuery = require('json-query');

app.set('view engine', 'ejs');

router.get('/carbonEmissions', function(req, res, next){
  res.render('pages/carbonEmissions.ejs', {emissions: "", vehicles: ""});
})

router.post('/carbonEmissions',async(req,res)=>{

  //info from front end
  var make = req.body.MAKE;
  var model = req.body.MODEL;
  var year = req.body.YEAR;

  // var vehicles = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year="
  // +req.body.year+"&make="+req.body.make+"&model="+req.body.model,
  var smtg;
  var vehicles =  Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year="+year+"&make="+make+"&model="+model,
   function (error, response, body) {

             if (error) {
                 throw error;
             }
             //console.log("response" + response);
             //smtg = body;
              response = parseString(body, function (err, result) {
   //console.dir(JSON.stringify(result));
   smtg=result;
   //console.log("Parsed response"+ JSON.stringify(smtg) );
   var emissions = [];
   if(smtg.menuItems.menuItem == undefined){
     res.render('pages/carbonEmissions.ejs',{emissions:"0",vehicles:"0"});
   }

   try{
   for(i=0 ; i < smtg.menuItems.menuItem.length; i++){
     console.log(result.menuItems.menuItem[i].value);
     var emission = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/emissions/"
      +result.menuItems.menuItem[i].value,
      function (error, response, body) {
                if (error) {
                    console.log(error);
                    return;
                }

                var emission = parseString(body, function (err, result) {
                  emissions.push(result);
                  console.log("emission " +i);
                  if(i == smtg.menuItems.menuItem.length){
                      console.log("EMISSION!! "+ JSON.stringify(emissions));
                      console.log("VEHICLE!! "+ JSON.stringify(smtg.menuItems));
                      res.render('pages/carbonEmissions.ejs',{emissions:JSON.stringify(emissions),vehicles:JSON.stringify(smtg.menuItems)});
                  }
                });
        });
      }
    }
    catch(err){
      console.log(err);
    }

      });
});
})

router.get('/', function(req, res){
  res.render('pages/otherPage.ejs');
})

router.get('/quiz', function(req, res){
  res.render('pages/quiz.ejs');
})

/*router.get('/carbonEmissions', function(req, res){
  res.render('pages/carbonEmissions.ejs');
})*/

router.get('/airPollution', function(req, res){
  res.render('pages/airPollution.ejs');
})

router.get('/musicPropaganda', function(req, res){
  res.render('pages/musicPropaganda.ejs');
})

// router.post('/musicPropaganda', function(req, res){
  
// })

//setting folder as views folder
app.set('TypeScript', path.join(__dirname, 'TypeScript'));
//enabling css and js
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//to make all webFlow valid from router variable
app.use('/', router);

app.listen(3000); //listens on port 3000
console.log("Server is running on port 3000");

//console.log(response);
