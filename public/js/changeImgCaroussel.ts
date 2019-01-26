/*code for slide show*/
/*source: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var image = document.getElementById("imageActivity");

    //calling the function of timeOfDay
    var index = getTimeOfDayEvent();

    //alert(index);

    //then refreshing the element
    $("#timeText").text(timeArray[index]);
    $("#imageActivity").attr("src","img/"+activitiesArray[index]);
    $("#text-caroussel").text(descriptionArray[index]);

}
