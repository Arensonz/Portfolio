
alert("Hello! I am an alert box!!");

alert("Hello! AGAIN!");

$(document).ready(function() {
    $("#logo").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
  
    $(".navbtn").click(function() {
        $('html, body').animate({
            scrollTop: $(".navbar").offset().top
        }, 1000);
    });
});