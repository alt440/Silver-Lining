$( document ).ready(function() {

  $('#firstSelect').click(function(){
    $('#buttonDropdown').html("Asia/Shanghai");
  })

  $('#secondSelect').click(function(){
    $('#buttonDropdown').html("Asia/Kolkata");
  })

  $('#thirdSelect').click(function(){
    $('#buttonDropdown').html("America/New_York");
  })

  $('#buttonChangeTimeZone').click(function(){
    //set a variable in local storage
    localStorage.setItem("timezone", $('#buttonDropdown').html());
    //refresh the page
    location.reload();
  })

  $("#masthead").load("./navBar.html");
});
