$(document).ready(function(){
	$('h4').click(function() {
	  $(this).next('div').slideToggle(400);
	  $(this).toggleClass('head-open');
	});	
	
	$("nav, .main-block").on("click","a", function (event) {
		event.preventDefault();
		$('.hidden-nav').hide(400);
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 180}, 1500);
	});
	
	$('.menu img, .menu-footer').click(function() {
	  $('.hidden-nav').show(400);
	});
	$('.close').click(function() {
	  $('.hidden-nav').hide(400);
	  return false;
	});	
	
	$(window).scroll(function(){
		$('header').toggleClass('header-has-background', $(this).scrollTop() > 0);
	});		
});