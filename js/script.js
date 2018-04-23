//portfolio_link	portfolio_section
$("#portfolio_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio_section").offset().top
    }, 2000);
});
//mobile device icon click to open menu ---------------------

$(document).ready(function(){
	$("#nav_icon").click(function(){
		$("#nav_bar").slideToggle(500);
	});
});

$(document).ready(function(){
	$("nav ul li").click(function(){
		$("#ul2").show();
	});
});

//scroll top button code

	$(document).ready(function(){
		
		$(window).scroll(function(){
			if($(this).scrollTop()>500) {
				$('#goTop').fadeIn();
			}else {
				$('#goTop').fadeOut();
			}
		});
		
		$('#goTop').click(function(){
			$('html, body').animate({scrollTop:0},1000);
		});
		
	});
	
//header fixed with scroll -----------------------------------
	
	$(document).ready(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>50) {
			$('header').css({"position":"fixed","z-index":"1000000","top":"0",});
			}else{
				$('header').css("position","relative");
			}
		});
	});
	