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




