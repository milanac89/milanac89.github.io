/*мобильное меню*/

	$('.menu img').click(function() {
	  $('nav').addClass('mobile-nav');
	  $('.close').show();
	});
	$('.close').click(function() {
        $('nav').removeClass('mobile-nav');
	  return false;
	});	
	
	$(window).on("resize",function(){
		if($(window).width() > 768) {
            $('nav').removeClass('mobile-nav');
		}
	});

	/*скролл меню*/
	$("nav").on("click","a", function (event) {
		event.preventDefault();
        $('nav').removeClass('mobile-nav');
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 170}, 1500);
	});


