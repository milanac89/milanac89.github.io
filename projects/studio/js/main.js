/*старт слайдера*/
var cust = document.querySelector('.js-customized');
var initCust = new Powerange(cust, { hideRange: true, klass: 'power-ranger', start: 80 });

/*внутренняя часть слайдера*/
$('.range-quantity').append('<p></p>');
$(".range-bar").before("<div class='range-bar-img'></div>");
$('.range-handle').appendTo('.slider-wrapper');
$('.range-bar').wrapAll("<div class='range-bar-wrapper'></div>")
$(window).on('load resize', function () {
    var width = $('.slider-wrapper').width();
    $('.range-quantity p').css('width', width);
    $('.range-bar').css('width', width + 22);
});

$(window).on('resize', function () {
    $('.range-handle').css('left', '76%');
    $('.range-quantity').css('width', '75%');
});