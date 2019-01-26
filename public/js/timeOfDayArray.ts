//Activities of the day array
var activitiesArray = [
  "breakfast.jpg",
  "trash.jpg"
];

//Time of day events are happening
var timeArray = [
  "16:00",
  "15:59"
];

var descriptionArray = [
  "Boiled food takes more energy than cereals!",
  "Do not forget to throw your banana to compost!"
];

//returns the winning index (event that is closest to the current time)
function getTimeOfDayEvent(){
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();

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
        if(hourInArray==winningHour && minutesInArray>=minutes
          && minutesInArray < winningMinutes){
            winningIndex = i;
            winningHour = hourInArray;
            winningMinutes = minutesInArray;
          }
        else if(winningHour>=hourInArray && minutesInArray>=minutes){
          winningIndex = i;
          winningHour = hourInArray;
          winningMinutes = minutesInArray;
        }
      }

      else{
        //if they do not have the same hour and the current index has a lower
        //hour, then it is closest to the current time
        winningIndex = i;
        winningHour = hourInArray;
        winningMinutes = minutesInArray;
      }
    }
  }

  return winningIndex;
}
