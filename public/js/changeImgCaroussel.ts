/*code for slide show*/
/*source: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 0;
showSlides();

function showSlides() {

    //alert(index);



    $(document).ready(function(){

      var i;
      var image = document.getElementById("imageActivity");

      //calling the function of timeOfDay
      var index = getTimeOfDayEvent();
      //then refreshing the element
      $("#timeText").text(timeArray[index]);
      $("#imageActivity").attr("src","img/"+activitiesArray[index]);
      $("#text-caroussel").text(descriptionArray[index]);
        /*$(function(){
        $('#imageActivity').submit(function(e){
                e.preventDefault();
                var form = $(this);
                var post_url = form.attr('action');
                var post_data = form.serialize();
                $('#loader3', form).html('<img src="img/'+activitiesArray[index]+'" />       Please wait...');
                $.ajax({
                    type: 'POST',
                    url: post_url,
                    data: post_data,
                    success: function(msg) {
                        $(form).fadeOut(800, function(){
                            form.html(msg).fadeIn().delay(2000);

                        });
                    }
                });
            });
        });*/
         });

}
