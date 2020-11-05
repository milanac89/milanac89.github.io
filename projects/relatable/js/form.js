$(document).ready(function () {

 
	
 
 
      
  //Здесь код формы отправки      
  $(".send").on("click", function(){
      
    var 
      whatform     = $(this).parent().attr('id'), //в какой форме сделали "клик"
      formtel      = $("#" + whatform + " #formtel"), //поле "Ваш телефон:" 			
      tellength    = $(formtel).val().length, // длина поля "Ваш телефон:"       
      allgood      = false; //Булевская переменная, определяющая переход к самой отправке
		
	  //alert(formtel);
	  //alert(formemail);
	  //alert($("#"+whatform).serializeArray());
	//whatform.submit();
	
	//alert(whatform);
	//return false;
          
    //Генерируем атрибуты name
    $("#"+whatform).find('#whatform').val(whatform);
    $(formtel).attr("name", "tel");

          
    if (allgood != true) {
    //Проверка на введенность данных
      if (tellength < 5) { //когда нет телефона
		$(formtel).val("");
        $(formtel).addClass('error'); 
      	setTimeout(function() { 
  
      	$(formtel).removeClass("error");	
      	}, 3000);    
        allgood = false;  
      } 


      if (tellength >= 5) { //Если имя есть и телефон есть
        $(formtel).removeClass("error");
        allgood = true;
      }
    }
          
    //Здесь, если все хорошо - идем на отправку  			  
    if(allgood == true) {  		
			//document.getElementById(whatform).submit();
	
			
			  $.ajax({
				type: 'POST',
				url: '/data/form.php',
				data: $("#"+whatform).serializeArray(),
				success: function(data) {
				//  location = finish; // redirect
				modal();
				setTimeout(modalHidden, 5000);

				  $(formtel).val('').removeClass('error');
				  $(this).parent().parent().parent().fadeOut();
 							
				}
			  });
		
    }
  
    return false;
  
  });
  
      
});