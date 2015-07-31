jQuery(document).ready(function($) {
  $('#youtube1').mediaelementplayer();
  $('#youtube2').mediaelementplayer();

  $(".js-button-input").on("click", function(){
  	$(this).addClass("btn-reserve--width");
		setTimeout(function(){ 
			$(".js-button-input").fadeOut();
			$(".js-box--input").fadeIn();
			$(".js-input-email").focus();
		}, 300);


  });


  $(".js-do-reservet").on("click", function(){
  	
  });
  

});

