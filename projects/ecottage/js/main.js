/*карусель*/
$(document).ready(function () {
    var owl = $('.loop');
    owl.owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        responsive: {
            600: {
                items: 2,
                nav: false
            }
        }
    });
});


/*скролл меню*/
	$("nav").on("click","a", function (event) {
		event.preventDefault();
		$('.hidden-nav').hide(400);
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 40}, 1500);
	});
/*расчет положения баннера*/	
function name(){
			if ($('.banner-show')[0]) {
				$('.banner-show').removeClass('banner-show').find('.banner-block').css({'left' : 'auto', 'right' : 'auto'});
			}
		    $(this).addClass('banner-show');	
			var size =  $(this).find('img').height();
			var width = $(window).width();
			var top = size/2 - 210;
			var left = size/2 - 125;
			var xLeft = $(this).offset().left + size/2;
			var xRight = (width - ( $(this).offset().left + $(this).outerWidth() )) + size/2;
			if (xLeft < 125){
				$(this).find('.banner-block').css({'top' : top, 'left' : 0, 'right' : 'auto'});
			} else if (xRight < 125) {
				$(this).find('.banner-block').css({'top' : top, 'right' : 0, 'left' : 'auto'});
			} else if (xLeft > 125 && xRight > 125) {
				$(this).find('.banner-block').css({'top' : top, 'left' : left});				
			}	
			return false;	
}
function name1(){
			$(this).removeClass('banner-show');	
			$(this).find('.banner-block').css({'left' : 'auto', 'right' : 'auto'});	
}


	$(window).on("load resize",function(){
		if ( $("html").hasClass("desktop")) {
				$( ".banners-conteiner > div" ).hover(name, name1);
		} else {
			$( ".banners-conteiner > div" ).click(name);
			
			$('html').click(function(){  // .bind( "touchend", function(){
				 $(this).find('.banner-show').removeClass('banner-show').children('.banner-block').css({'left' : 'auto', 'right' : 'auto'});	
			});
		}								
	});  
	
/*модальное окно*/

//    var open_modal = $('.work-bc');
//    var close = $('.modal_close'); 
//    var modal = $('.modal_div'); 
//
//     open_modal.click( function(event){ 
//         event.preventDefault(); 
//         var div = $(this).attr('href'); 
//		
//                 $(div) 
//                     .css('display', 'block') 
//                     .animate({opacity: 1}, 200); 
//						 $('body').css({'overflow': 'hidden', 'margin-right': '17px'});			
//						 $('.menu').addClass('menu-modal');		 
//     });
//
//     close.click( function(){ 	 	
//            modal 
//             .animate({opacity: 0}, 200, 
//                 function(){ 
//                     $(this).css('display', 'none');
//                 }
//             );
//			setTimeout(function() {
//				$('body').css({'overflow': 'visible', 'margin-right': '0px'});
//				$('.menu').removeClass('menu-modal');
//			}, 300);	
//	 
//     });
	 
	 
	var $modalScroll = document.querySelector('.modal_div');
	$('.work-bc').click( function(event){ 
		event.preventDefault(); // выключaем стaндaртную рoль элементa
				$('.modal_div') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
				$('.desktop .menu').addClass('menu-modal');	
				scrollLock.disablePageScroll($modalScroll);		
	});
	$('.modal_close').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.modal_div')
			.animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('h4').text('');
					$('.description-text').text('');  
					$('.modal-link, .modal-link2').text('').attr('href', '');  
					$('.modal-logo').attr('src', ''); 					
					$('.site-image').attr('src', ''); 
					scrollLock.enablePageScroll($modalScroll);
					$('.desktop .menu').removeClass('menu-modal');	
				}
			);			
	});
 


	 
	 
	 
	 
	 

/*скрол плашка*/

	$('.modal_div').scroll(function(){
		if($(window).width() < 1200) {
			$('.modal_close').toggleClass('mobile-close', $(this).scrollTop() > 0);
		}
	});		
	
/*мобильное меню*/

	$('.menu-icon').click(function() {
	  $('.hidden-nav').show(400);
	});
	$('.close1').click(function() {
	  $('.hidden-nav').hide(400);
	  return false;
	});	
	
	$(window).on("resize",function(){
		if($(window).width() > 992) {
			$('.hidden-nav').hide(400);
		}
	});








