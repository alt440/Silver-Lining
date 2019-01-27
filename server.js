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

router.get('/', function(req, res){


  // var vehicles = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year="
  // +req.body.year+"&make="+req.body.make+"&model="+req.body.model,
  var smtg;
  var vehicles =  Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=2012&make=Honda&model=Fit",
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
   for(i=0 ; i < smtg.menuItems.menuItem.length; i++){
     var emission = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/emissions/"
      +result.menuItems.menuItem[i].value,
      function (error, response, body) {
                if (error) {
                    throw error;
                }

                var emission = parseString(body, function (err, result) {
                  emissions.push(result);
                  console.log("emission " +i);
                  if(i == smtg.menuItems.menuItem.length){
                      console.log("EMISSION!! "+ JSON.stringify(emissions));
                      console.log("VEHICLE!! "+ JSON.stringify(smtg.menuItems));
                      res.render('pages/homePage.ejs',{emissions:JSON.stringify(emissions),vehicles:JSON.stringify(smtg.menuItems)});
                  }
                });
                // emissions.push(emission);
                // console.log("emission" + JSON.stringify(emission));
                // if(i == result.menuItems.menuItem.length){
                //
                // }
   });
  }
   // for(i = 0; i < result.menuItems.menuItem.length; i++){
   //   var emission = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/emissions/"
   //   +result.menuItems.menuItem[i],
   //   function (error, response, body) {
   //             if (error) {
   //                 throw error;
   //             }
   //
   //             var emission = parseString(body, function (err, result) {});
   //             emissions.push(emission);
   //             console.log("emission" + emission);
   //             if(i == result.menuItems.menuItem.length){
   //
   //             }
   // });
   //console.log("emissions" + emissions);
 });
});

 //end parseString
 // for(i = 0; i < result.menuItems.menuItem.length; i++){
 //
 // });

console.log("vehicle"+ JSON.stringify(vehicles.body));

})

router.post('/',async(req,res)=>{
  // var vehicles = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year="
  // +req.body.year+"&make="+req.body.make+"&model="+req.body.model,
  var vehicles = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=2012&make=Honda&model=Fit",
   function (error, response, body) {
             if (error) {
                 throw error;
             }
             console.log("response" + response);
              response = parseString(body, function (err, result) {
   console.dir(JSON.stringify(result));
   var emissions = []
   // for(i = 0; i < result.menuItems.menuItem.length; i++){
   //   var emission = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/emissions/"
   //   +result.menuItems.menuItem[i],
   //   function (error, response, body) {
   //             if (error) {
   //                 throw error;
   //             }
   //
   //             var emission = parseString(body, function (err, result) {});
   //             emissions.push(emission);
   //             console.log("emission" + emission);
   //             if(i == result.menuItems.menuItem.length){
   //
   //             }
   // });
   //console.log("emissions" + emissions);
   res.redirect('/',{items:result.menuItems});
 });
 console.log("Parsed resonse"+ response );

 //end parseString
 // for(i = 0; i < result.menuItems.menuItem.length; i++){
 //   var emission = Request.get("https://www.fueleconomy.gov/ws/rest/vehicle/emissions/"
 //   +result.menuItems.menuItem[i],
 //   function (error, response, body) {
 //             if (error) {
 //                 throw error;
 //             }
 //
 //             var emission = parseString(body, function (err, result) {});
 //             emissions.push(emission);
 //             console.log("emission" + emission);
 //             if(i == result.menuItems.menuItem.length){
 //
 //             }
 // });
});
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

//console.log(response);
