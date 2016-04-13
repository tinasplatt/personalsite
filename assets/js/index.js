
$(document).ready( function() {
	setTimeout(function(){
        
        $('#logo-c').animate({
		  "margin-left": "-=500px",
		}, 1000 );
		$('#logo-j').animate({
		  "left": "+=500px",
		}, 1000, function() {
		    	$('#wordmark').animate({
				  "opacity": 1,
				}, 1200);
				$('#tagline').animate({
				  "opacity": 1,
				}, 1500);
				$('#enter-button').animate({
				  "opacity": 1,
				}, 2000);
		} );		
    }, 1000);

	$('#enter-button').click( function() {
		$(this).animate({
			'opacity': 0
		}, 200, function() {
			$('#wordmark').animate({
				"opacity": 0
			}, 300);
			$('#tagline').animate({
				"opacity": 0
			}, 300);
			$('#logo-c').animate({
			  "margin-left": "+=500px",
			}, 1000 );
			$('#logo-j').animate({
			  "left": "-=500px",
			}, 1000, function() {
				$('.logo').addClass('rotate');
				setTimeout(function() {
					$('.logo').css('display','none');
					window.location.href = "main.html";
				},2000);				
			
			});
		});
	});
});