function animations(){

	// array with white, dark blue, light blue, yellow and coral
    //selectColor = ['#FFFFFF','#000033','#3399CC','#FFCC66','#ff9966']


    //spawns shapes, shocker
	function spawn() {
		// timeout function for creating a hexagon on an interval
	    setTimeout(function() {
	        $( 'header' ).prepend($('<div>')
	        	.addClass('circle')
	        	.offset({
	        		left: 100,
	        		top: 100
	        	});
	        	// .animatesShapes());
	        );

	        numberOfCircles++;
	        if (numberOfCircles < 3) {
	            spawn();
	        }

	    }, 100);

	};


    // adds divs to create a hexagon
 //    $.fn.hexify = function(size) {
 //    	var randomColor = selectColor[Math.floor(Math.random()*5)];
    	
 //    	$( this ).append($('<div>').addClass('hextop').css({
 //    		'border-bottom-color': randomColor,
 //    		'border-bottom-width': 15 * size,
 //    		'border-right-width': 26 * size,
 //    		'border-left-width': 26 * size
 //    	}));

 //    	$( this ).append($('<div>').addClass('hexmiddle').css({
 //    		'background-color': randomColor, 
 //    		'height': 30 * size,
 //    		'width': 52 * size
 //    	}));

 //    	$( this ).append($('<div>').addClass('hexbottom').css({
 //    		'border-top-color': randomColor,
 //    		'border-top-width': 15 * size,
 //    		'border-right-width': 26 * size,
 //    		'border-left-width': 26 * size
 //    	}));
 //    	return this;
	// }

	// $.fn.animatesShapes = function() {
 //    	size = $(this).prop('size');
	// 	// duration of animation may be altered depending on effect to achieve
	// 	time = (2500 + Math.floor(1500 * Math.random()) ) * size;
	// 	currentPositionOfShape = $( this ).offset();

	// 	//reset
 //    	$( this ).offset({
 //    		top: currentPositionOfShape.top,
 //    		left: Math.random() * window.innerWidth
 //    	});

 //    	// toggle variable decides whether it's going up or down
	// 	if ( currentPositionOfShape.top < 0.5 * window.innerHeight ) {
	// 		var yCoordEnd = window.innerHeight *1.5;
	// 	} else {
	// 		yCoordEnd = -100;
	// 	}

	// 	// simple animation function, sets new coordinates, toggles, and recurses
	// 	$( this ).animate({
	// 		opacity: (1 / size) - 0.2 * size,
	// 		left: Math.random() * window.innerWidth,
	// 		top: yCoordEnd
	// 	},time, "linear", function(){
	// 		$( this ).animatesShapes();
	// 	});

	// 	return this
	// }	

	// finds a random x coordinate that falls within the width of the window
	// $.fn.getXCoord = function() {
		
	// 	var xCoord=Math.random();

	// 	if ( ( xCoord * window.innerWidth + 5) > window.innerWidth ) {
	// 		xCoord = window.innerWidth - 5;
	// 	} else {
	// 		xCoord = xCoord * window.innerWidth;
	// 	}

	// 	return xCoord
	// }

	// $( window ).resize(function() {
	// 	$( '.circle' ).stop();
	// 	$( "body" ).css( "width", window.innerWidth);
	// 	reanimate();
	// });

	// function reanimate() {
	// 	$('.circle').each( function( index ) {
	// 		$(this).animatesShapes();
	// 	});
	// }


	numberOfCircles = 0;
	spawn(); 
}