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
		Parse.initialize("1xzWcLBL9xXTP4s3XpdNYChaLP5MjZ7QPDNUiuDe", "co9aMd2V4V7DXeewbm9o27DRxES0NQup4iDWiWR1");
		  Parse.Cloud.run('sendReservation', { email: 'Tests' }, {
			  success: function(result) {
			    alert(result);
			  },
			  error: function(error) {
			    alert(error);
			  }
  	});
	});
});

