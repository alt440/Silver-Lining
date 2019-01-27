//Activities of the day array
//must follow the timeArray order!
var activitiesArray = [
  "coffee.jpg",
  "breakfast.jpg",
  "trash.jpg",
  "reusableContainers.jpg",
  "bicycle.jpg",
  "carpool.jpg",
  "food.jpg",
  "restaurant.png",
  "packagedFood.jpg",
  "reusableBags.jpg",
  "plasticUtensils.jpg",
  "lightbulb.jpg"
];

//Time of day events are happening
//must be in increasing order!!
var timeArray = [
  "7:00",
  "7:30",
  "8:00",
  "8:15",
  "8:30",
  "8:45",
  "11:30",
  "12:00",
  "17:00",
  "17:30",
  "18:30",
  "19:00"
];

//must follow the timeArray order!
var descriptionArray = [
  "Why use many cups when you can use only one?",
  "Boiled food takes more energy than cereals!",
  "Do not forget to throw your banana to compost!",
  "Use containers instead of plastic bags",
  "Scale back car usage",
  "Do some carpooling if you want to drive to work",
  "Still food on your plate? Donate it to a food kitchen!",
  "Ask for bringing back your food leftovers home",
  "Buy less packaged food",
  "Bring your reusable bags to supermarkets",
  "Abandon the plastic utensils for your metal utensils",
  "Turn off the light when you do not need it"
];

//returns the winning index (event that is closest to the current time)
function getTimeOfDayEvent(){

  var date;

  if(localStorage.getItem("timezone").localeCompare("Asia/Shanghai")==0 ||
      localStorage.getItem("timezone").localeCompare("Asia/Kolkata") == 0 ||
      localStorage.getItem("timezone").localeCompare("America/New_York") == 0){
        date = new Date().toLocaleString("en-US", {timeZone: localStorage.getItem("timezone")});
        date = new Date(date);
        /*date.toLocaleString('en-US',
            {timeZone: localStorage.getItem("timezone")});*/
      }
  else{
    date = new Date();
  }

  var hours = date.getHours();
  var minutes = date.getMinutes();

  //alert(hours+":"+minutes);

  //closest index above the actual time
  var winningIndex = 0;
  var winningHour = 999;
  var winningMinutes = 999;

  for (var i = 0; i<timeArray.length;i++){
    //looking into the timeArray for corresponding times
    //splitting the time with the :
    var hour_minutes = timeArray[i].split(":");
    hourInArray = parseInt(hour_minutes[0]);
    minutesInArray = parseInt(hour_minutes[1]);

    //now we have to find the event which is the closest above the current time
    if(hourInArray>=hours && hourInArray<=winningHour){
      //if the time of day and the event are at the same hour, then minutes need
      //to be greater or equal
      if(hourInArray==hours){
        //if the current hour is the same as the hour of event, then only need
        //to check the minutes
        //first statement because must be at a later time
        //second statement because it must be closest to the current time
        if(minutesInArray>=minutes
          && minutesInArray < winningMinutes){
            winningIndex = i;
            winningHour = hourInArray;
            winningMinutes = minutesInArray;
          }
      }

      else{
        //if they do not have the same hour and the current index has a lower
        //hour, then it is closest to the current time
        if(hourInArray==winningHour){
          if(minutesInArray<winningMinutes){
            winningIndex = i;
            winningHour = hourInArray;
            winningMinutes = minutesInArray;
          }
        }
        else{
          winningIndex = i;
          winningHour = hourInArray;
          winningMinutes = minutesInArray;
        }

      }
    }
  }
  //alert(winningHour+":"+winningMinutes);
  return winningIndex;
}
