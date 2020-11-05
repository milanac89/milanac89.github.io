function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

$(document).ready(function () {

    $('input').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    $("form").submit(function() { return false; });


    //Здесь код формы отправки
    $(".send-mail-tel").on("click", function(){

        var
            whatform     = $(this).parent().attr('id'), //в какой форме сделали "клик"
            formname     = $("#" + whatform + " #formname"), //поле "Ваше имя:"
            namelength   = $(formname).val().length, // длина поля "Ваше имя:"
            formtel      = $("#" + whatform + " #formtel"), //поле "Ваш телефон:"
            tellength    = $(formtel).val().length, // длина поля "Ваш телефон:"
            allgood      = false, //Булевская переменная, определяющая переход к самой отправке
            formemail      = $("#" + whatform + " #formemail"), //поле "Ваш e-mail:"
            maillength    = $(formemail).val().length; // длина поля "Ваш телефон:"


            //Генерируем атрибуты name
            $(formname).attr("name", "name");
        $(formtel).attr("name", "tel");
        $(formemail).attr("name", "email");

        if (allgood != true) {
            //Проверка на введенность данных

            if (namelength < 3 ) { //Если оба поля не введены
                $(formname).addClass('error error-name');
                $('input[placeholder].error-name').attr("placeholder", "Введите более 3 букв!");
                setTimeout(function() {
                    $('input[placeholder].error-name').attr("placeholder", "Введите имя*");
                    $(formname).removeClass("error-name");
                }, 3000);
                $('.error-name').val("");
                allgood = false;
            }

            if (tellength < 7) { //Если имя есть, телефона нет
                $(formtel).addClass("error-tel");
                $('input[placeholder].error-tel').attr("placeholder", "Введите более 7 цифр!");
                setTimeout(function() {
                    $('input[placeholder].error-tel').attr("placeholder", "Введите телефон*");
                    $(formtel).removeClass("error-tel");
                }, 3000);
                $('.error-tel').val("");
                allgood = false;
            }


            if (namelength >= 3 && tellength >= 7) { //Если имя есть и телефон есть
                $(formname).removeClass("error");
                $(formtel).removeClass("error");
                allgood = true;
            }
        }

        //Здесь, если все хорошо - идем на отправку
        if(allgood == true) {
            var form = $('#' + whatform);
            var params = {};

            params.name = form.find('input[name=name]').val();
            params.whatform = whatform;
            params.email = form.find('input[name=email]').val();
            params.tel = form.find('input[name=tel]').val();
            params.apartments = form.find('input[name=apartments]:checked').val();


            params.utm_source = getUrlParameter('utm_source') || '';
            params.utm_medium = getUrlParameter('utm_medium') || '';
            params.utm_campaign = getUrlParameter('utm_campaign') || '';
            params.utm_content = getUrlParameter('utm_content') || '';
            params.phrase = getUrlParameter('phrase') || '';
            params.utm_term = getUrlParameter('utm_term') || '';

            $.post('data/form.php', params,
                function(data) {
                    $('#exampleModal2').modal('hide');
                    $('#exampleModal3').modal('show');
                    setTimeout(function() {
                        $('#exampleModal3').modal('hide');
                    }, 3000);
                    $(formname).val('').removeClass('error');
                    $(formtel).val('').removeClass('error');
                    $(formemail).val('').removeClass('error');
                    $(this).parent().parent().parent().fadeOut();
                    // console.log("Длина имени: " + namelength + " Длина телефона: " + tellength + " Булевская: " + allgood + " Ответ от обработчика: " + data);
                });

        }

        return false;

    });




    //Здесь код формы отправки
    $(".send-tel").on("click", function(){

        var
            whatform     = $(this).parent().attr('id'), //в какой форме сделали "клик"
            formname     = $("#" + whatform + " #formname"), //поле "Ваше имя:"
            namelength   = $(formname).val().length, // длина поля "Ваше имя:"
            formtel      = $("#" + whatform + " #formtel"), //поле "Ваш телефон:"
            tellength    = $(formtel).val().length, // длина поля "Ваш телефон:"
            allgood      = false, //Булевская переменная, определяющая переход к самой отправке
            formemail      = $("#" + whatform + " #formemail"), //поле "Ваш e-mail:"
            maillength    = $(formemail).val().length; // длина поля "Ваш телефон:"


            //Генерируем атрибуты name
            $("#"+whatform).find('#whatform').val(whatform);
        $(formname).attr("name", "name");
        $(formtel).attr("name", "tel");
        $(formemail).attr("name", "email");

        if (allgood != true) {
            //Проверка на введенность данных

            if (namelength < 3 ) { //Если оба поля не введены
                $(formname).addClass('error error-name');
                $('input[placeholder].error-name').attr("placeholder", "Введите более 3 букв!");
                setTimeout(function() {
                    $('input[placeholder].error-name').attr("placeholder", "Введите имя*");
                    $(formname).removeClass("error-name");
                }, 3000);
                $('.error-name').val("");
                allgood = false;
            }

            if (maillength < 3 ) { //Если оба поля не введены
                $(formemail).addClass('error error-mail');
                $('textarea[placeholder].error-mail').attr("placeholder", "Введите более 3 букв!");
                setTimeout(function() {
                    $('textarea[placeholder].error-mail').attr("placeholder", "Сопроводительный текст*");
                    $(formemail).removeClass("error-mail");
                }, 3000);
                $('.error-mail').val("");
                allgood = false;
            }

            if (tellength < 7) { //Если имя есть, телефона нет
                $(formtel).addClass("error-tel");
                $('input[placeholder].error-tel').attr("placeholder", "Введите более 7 цифр!");
                setTimeout(function() {
                    $('input[placeholder].error-tel').attr("placeholder", "Введите телефон*");
                    $(formtel).removeClass("error-tel");
                }, 3000);
                $('.error-tel').val("");
                allgood = false;
            }


            if (namelength >= 3 && tellength >= 7 && maillength >= 7) {
                $(formname).removeClass("error");
                $(formtel).removeClass("error");
                $(formemail).removeClass("error");
                allgood = true;
            }

        }

        //Здесь, если все хорошо - идем на отправку
        if(allgood == true) {
            var form = $('#' + whatform);
            var params = {};

            params.name = form.find('input[name=name]').val();
            params.whatform = whatform;
            params.email = form.find('textarea[name=email]').val();
            params.tel = form.find('input[name=tel]').val();

            params.utm_source = getUrlParameter('utm_source') || '';
            params.utm_medium = getUrlParameter('utm_medium') || '';
            params.utm_campaign = getUrlParameter('utm_campaign') || '';
            params.utm_content = getUrlParameter('utm_content') || '';
            params.phrase = getUrlParameter('phrase') || '';
            params.utm_term = getUrlParameter('utm_term') || '';

            $.post('data/form.php', params,
                function(data) {
                    $('#exampleModal').modal('hide');
                    $('#exampleModal3').modal('show');
                    setTimeout(function() {
                        $('#exampleModal3').modal('hide');
                    }, 3000);
                    $(formname).val('').removeClass('error');
                    $(formtel).val('').removeClass('error');
                    $(formemail).val('').removeClass('error');
                    $(this).parent().parent().parent().fadeOut();
                    // console.log("Длина имени: " + namelength + " Длина телефона: " + tellength + " Булевская: " + allgood + " Ответ от обработчика: " + data);
                });

        }

        return false;

    });














});