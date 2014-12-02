$(document).ready(function(){


	x = 0
	while (x < 16){
		$('#container').append("<div class='square removable'></div>");
		x = x + 1
	};

	$('.square').on('mouseenter', function(){
		$(this).addClass('red');
	});
	
	$("button.random").on('mouseenter', function(){
		var rgb1 = Math.floor(Math.random()*256);
		var rgb2 =  Math.floor(Math.random()*256); 
		var rgb3 =  Math.floor(Math.random()*256); 
		$(this).css({'background' : "rgb(" + rgb1 +"," + rgb2 +"," + rgb3 });
	});
});


//functions for the random color game

function createRandomColorGrid(gridSize){
	totalGrid = gridSize*gridSize;
	i = 0
		while (i < totalGrid){
		$('#container').append("<div class='square removable'></div>");
	
		i = i + 1
	};

	width = 800/gridSize;
	height = 800/gridSize;

	$("div").find('.square').css({'width': width+"px", 'height': height + "px"});

	$(".square").on('mouseenter', function(){
		var rgb1 = Math.floor(Math.random()*256);
		var rgb2 =  Math.floor(Math.random()*256); 
		var rgb3 =  Math.floor(Math.random()*256); 
		$(this).css({'background' : "rgb(" + rgb1 +"," + rgb2 +"," + rgb3 });
	});
}


function randomColor(){
					 $(".removable").remove();
				 grid = prompt();

				 createRandomColorGrid(grid);
				 console.log(grid);
	}


/// functions for the regular game

function createRegGrid(gridSize){
	totalGrid = gridSize*gridSize;
	i = 0
		while (i < totalGrid){
		$('#container').append("<div class='square removable'></div>");
	
		i = i + 1
	};

	width = 800/gridSize;
	height = 800/gridSize;

	$("div").find('.square').css({'width': width+"px", 'height': height + "px"});

	$(".square").on('mouseenter', function(){
		$(this).css({'background' : "lightblue"});
	});
}

	function regGame(){
					 $(".removable").remove();
				 grid = prompt();

				 createRegGrid(grid);
				 console.log(grid);
	}

// functions for opacity game
opacity = 1

function createOpacityGrid(gridSize){
	totalGrid = gridSize*gridSize;
	i = 0
		while (i < totalGrid){
		$('#container').append("<div class='square removable opacity1'></div>");
	
		i = i + 1
	};

	width = 800/gridSize;
	height = 800/gridSize;

	$("div").find('.square').css({'width': width+"px", 'height': height + "px"});
	
	$('.square').on('mouseenter', function(){
		if ($(this).hasClass('opacity1')){
			$(this).css({"background" : "lightblue", "opacity" : 0.9});
			$(this).addClass("opacity2").removeClass('opacity1');
		}
		else if  ($(this).hasClass('opacity2')){
			$(this).css({"background" : "lightblue", "opacity" : 0.8});
			$(this).addClass("opacity3").removeClass('opacity2');
		}
		else if  ($(this).hasClass('opacity3')){
			$(this).css({"background" : "lightblue", "opacity" : 0.7});
			$(this).addClass("opacity4").removeClass('opacity3');
		}
		else if  ($(this).hasClass('opacity4')){
			$(this).css({"background" : "lightblue", "opacity" : 0.6});
			$(this).addClass("opacity5").removeClass('opacity4');
		}
		else if  ($(this).hasClass('opacity5')){
			$(this).css({"background" : "lightblue", "opacity" : 0.5});
			$(this).addClass("opacity6").removeClass('opacity5');
		}
		else if  ($(this).hasClass('opacity6')){
			$(this).css({"background" : "lightblue", "opacity" : 0.4});
			$(this).addClass("opacity7").removeClass('opacity6');
		}
		else if  ($(this).hasClass('opacity7')){
			$(this).css({"background" : "lightblue", "opacity" : 0.3});
			$(this).addClass("opacity8").removeClass('opacity7');
		}
		else if  ($(this).hasClass('opacity8')){
			$(this).css({"background" : "lightblue", "opacity" : 0.2});
			$(this).addClass("opacity9").removeClass('opacity8');
		}
		else if  ($(this).hasClass('opacity9')){
			$(this).css({"background" : "lightblue", "opacity" : 0.1});
			$(this).addClass("opacity10").removeClass('opacity9');
		}
		else if  ($(this).hasClass('opacity10')){
			$(this).css({"background" : "lightblue", "opacity" : 0});
			$(this).removeClass('opacity5');
		}
		
		});
}

	function opacityGame(){
					 $(".removable").remove();
				 grid = prompt();

				 createOpacityGrid(grid);
				 console.log(grid);
	}
