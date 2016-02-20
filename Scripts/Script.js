
alert("Hello! I am an alert box!!");

$(document).ready(function() {
	
	$(".carousel-indicators").hide();
	
//	Logo Scroll to Intro
  $("#logo").click(function() {
    $('html, body').animate({
      scrollTop: $(".intro, .header-spacer").offset().top
    }, 750);
  });

//	Nav Scroll to Content
  $(".btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".navbar").offset().top
    }, 750);
  });

	var activeNav = function () {
		$('.carousel-indicators li').each(function() {
			if( $(this).hasClass('active') && $(this).hasClass('work-btn') ) {
				
				$('.navbar-header button.active').removeClass('active');
				$('#work').addClass('active');
				console.log("work");
				return false;
			}

			else if( $(this).hasClass('active') && $(this).hasClass('about-btn') ) {
				
				$('.navbar-header button.active').removeClass('active');
				$('#about').addClass('active');
				console.log("about");
			}

			else if( $(this).hasClass('active') && $(this).hasClass('contact-btn') ) {
				
				$('.navbar-header button.active').removeClass('active');
				$('#contact').addClass('active');
				console.log("contact");
				return false;
			}
			
			else{
				
			}
		});
	}
	$('.navbar-header button').click(function() {
		activeNav();
	});
	
//	Nav Buttons Add/Remove Active Class
//	$('.navbar-header button').click(function() {
//
//    $('.navbar-header button.active').removeClass('active');
//    $(this).addClass('active');
//
//	});
//	
	//	Indicators Add/Remove Active Class
	$('.carousel-indicators li').click(function() {
		activeNav();
	});
	
		//	Control Left Add/Remove Active Class
	$('.left .carousel-control').click(function() {
		activeNav();
	});
	
		//	Control Right Add/Remove Active Class
	$('.right .carousel-control').click(function() {
		activeNav();
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