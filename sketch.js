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

