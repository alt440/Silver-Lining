/*code for slide show*/
/*source: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex:number = 0;
showSlides();

function showSlides() {
    var i:number;
    var slides = document.getElementsByClassName("mySlides");
    //alert(slides.length);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex <= 0) {slideIndex = slides.length-1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
