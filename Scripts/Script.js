
alert("Hello! I am an alert box!!");

$(document).ready(function() {
	
	$(".carousel-indicators").hide();
	
  $("#logo").click(function() {
    $('html, body').animate({
      scrollTop: $("#intro").offset().top
    }, 750);
  });

  $(".navbtn").click(function() {
    $('html, body').animate({
      scrollTop: $(".navbar").offset().top
    }, 750);
  });
	
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $(".carousel-indicators").fadeIn(200);
    } else {
      $(".carousel-indicators").fadeOut(200);
    }
	});
	
});