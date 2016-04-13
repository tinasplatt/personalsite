$(document).ready( function () {
	console.log('ready');
	// animations();

	$('header').animate({
		'opacity':1
	}, 1000, function() {
		$('#header-text').animate({
		  "left": "-=500px",
		}, 500, function() {
			$('#me-1').animate({
				'opacity':1
			},250, function() {
				$('#me-2').animate({
				'opacity':1
				},250, function() {
					$('#me-3').animate({
						'opacity':1
					},500, function() {
					});
				});
			});
		});
	});

	$('header').height(window.innerHeight);
	$('section').height(window.innerHeight);
	$('.header-container').height(window.innerHeight*0.8);



	// ================== GALLERY ================

	$('.gallery-image').each( function(index) {
		$(this).css({
			'background-image':'url(assets/images/image'+index +'.png)'
		});
		$('#index-container').append('<div class="gallery-index" data-selected="0"></div>');
	});
	$('.gallery-index:first-child').attr('data-selected',1).addClass('index-selected');


	$('.gallery-index').each(function(index) {
		$(this).click( function() {
			$('.gallery-image').fadeOut(300);
			$('#image-'+index).delay(100).fadeIn('slow');
			$('.gallery-index').attr("data-selected",0).removeClass('index-selected');
			$('.gallery-index:nth-child('+(index+1)+')').attr("data-selected",1).addClass('index-selected');
			
		})
	})

	$('.gallery-nav-button').each( function(index) {
		$(this).click(function(){
			currentIndex=parseInt($('.gallery-index[data-selected="1"]').index()) + parseInt($(this).attr('data-index'));
			
			if( currentIndex == $('.gallery-index').length ) {
				currentIndex = 0;
			} else if (currentIndex == -1) {
				currentIndex = $('.gallery-index').length - 1;
			}

			$('.gallery-index').attr("data-selected",0).removeClass('index-selected');;
			$('.gallery-index:nth-child('+(currentIndex+1)+')').attr("data-selected",1).addClass('index-selected');
			$('.gallery-image').fadeOut(300);
			$('#image-' + currentIndex).delay(100).fadeIn('slow');

		})
	})

	// ==================== SERVICES ====================

	$('.service').click(function() {
		offset1 = $(this).offset();
		offset2 = $('#selection').offset();
		distance=offset1.left-offset2.left + 25;
		info = $(this).attr('id');
		$('.info').hide();
		$('#info-'+ info).fadeIn(1000);
		$('#selection').animate({
			left: "+=" + distance  + "px"
		});

	});
	



 });

