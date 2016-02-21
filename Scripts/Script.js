
alert("Hello! I am an alert box!!");

$(document).ready(function() {
	
	$(".carousel-indicators").hide();
	
//	Fading Indicators
	$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
      $(".carousel-indicators").fadeIn(200);
    } 
		else {
      $(".carousel-indicators").fadeOut(200);
    }
	});
	
//	Remove Active Class When Scrolling Up
	$(document).scroll(function() {
		var y = $(this).scrollTop();
    if (y < 200) {
      $('.navbar-header button.active').removeClass('active');
			console.log("remove active class")
    } 
		else if (y > 200) {
			if( $('.work-panel').hasClass('active') ) {
				$('#about-btn').removeClass('active');
				$('#contact-btn').removeClass('active');
				$('#work-btn').addClass('active');
				console.log("work");
			}
			else if( $('.about-panel').hasClass('active') ) {
				$('#work-btn').removeClass('active');
				$('#contact-btn').removeClass('active');
				$('#about-btn').addClass('active');
				console.log("about");
			}
			else if( $('.contact-panel').hasClass('active') ) {
				$('#work-btn').removeClass('active');
				$('#about-btn').removeClass('active');
				$('#contact-btn').addClass('active');
				console.log("contact");
			}
			else{
			}
		}
		else {
		}
	});
	
//	Logo Scroll to Intro
  $("#logo").click(function() {
    $('html, body').animate({
      scrollTop: $(".intro, .header-spacer").offset().top
    }, 750);
  });

//	Nav Scroll to Content
  $(".btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".caroNav").offset().top
    }, 750);
  });

	$('#myCarousel').on('slid.bs.carousel', function (e) {
		console.log("true");

		$('.carousel-indicators li').each(function() {
			if( $(this).hasClass('active') && $(this).hasClass('work-btn') ) {

				$('.navbar-header button.active').removeClass('active');
				$('#work-btn').addClass('active');
				console.log("work");
				return false;
				
			}

			else if( $(this).hasClass('active') && $(this).hasClass('about-btn') ) {
				
				$('.navbar-header button.active').removeClass('active');
				$('#about-btn').addClass('active');
				console.log("about");
			}

			else if( $(this).hasClass('active') && $(this).hasClass('contact-btn') ) {
				
				$('.navbar-header button.active').removeClass('active');
				$('#contact-btn').addClass('active');
				console.log("contact");
				return false;
			}

			else{
			}

		});
	});
	
});
	