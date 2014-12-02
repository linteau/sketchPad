$(document).ready(function(){


	x = 0
	while (x < 16){
		$('#container').append("<div class='square removable'></div>");
		x = x + 1
	};

	$('.square').on('mouseenter', function(){
		$(this).addClass('red');
	});
	
});


//functions for the game

function createGrid(gridSize){
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
		$(this).addClass('red');
	});
}


function newGame(){
					 $(".removable").remove();
				 grid = prompt();

				 createGrid(grid);
				 console.log(grid);


	}

