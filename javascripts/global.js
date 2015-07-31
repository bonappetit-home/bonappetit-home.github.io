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


  $(".js-do-reserve").on("click", function(){
  	var emailVal = $(".js-input-email").val();
  	if(validateEmail(emailVal)){
  		Parse.initialize("1xzWcLBL9xXTP4s3XpdNYChaLP5MjZ7QPDNUiuDe", "co9aMd2V4V7DXeewbm9o27DRxES0NQup4iDWiWR1");
		  Parse.Cloud.run('sendReservation', { email: emailVal }, {
			  success: function(result) {
			    alert(result);
			  },
			  error: function(error) {
			    alert(error);
			  }
  		});
  	}else{
  		alert("Bad email, please try again");
  	}
		
	});

	function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
	}
});

