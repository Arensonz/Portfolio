
alert("Hello! I am an alert box!!");

$(document).ready(function() {
	
	$(".carousel-indicators").hide();
	
  $("#logo").click(function() {
    $('html, body').animate({
      scrollTop: $(".intro, .header-spacer").offset().top
    }, 750);
  });

  $(".btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".navbar").offset().top
    }, 750);
  });
	
	$('.navbar-header button').click(function() {

    $('.navbar-header button.active').removeClass('active');
    $(this).addClass('active');
		
	});
	
/*	$('.carousel-indicators:nth-child(n+1):nth-child(-n+5)').hasClass('active')function() {
		$('.navbar-header button.active').removeClass('active');
		$('#work').addClass('active');
	}
	
	$('.carousel-indicators:nth-child(6)').hasClass('active') {
		$('.navbar-header button.active').removeClass('active');
		$('#about').addClass('active');
	}
	
	$('.carousel-indicators:nth-child(7)').hasClass('active') {
		$('.navbar-header button.active').removeClass('active');
		$('#contact').addClass('active');
	}*/
	
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $(".carousel-indicators").fadeIn(200);
    } else {
      $(".carousel-indicators").fadeOut(200);
    }
	});
	
});