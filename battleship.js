// must setup global variables OUTSIDE of function scope

//Making board a 2D nested array
// 0 means blank, 1 means ship

var boxSize = 40;

var board = [
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
]

var spot;
function rand(num){
	//takes a number argument and returns a random whole number between 0 and the argument
	return Math.floor(Math.random()*num);
}

function setup(){
	createCanvas(500,500);
	// randomly assign 1 spot to be a ship
	spot = {
		"x":rand(5),
		"y":rand(5)
	}
}

function draw(){
	// redrawing background "clears" old content
	background(0);

	// redrawing current board
	for(var i = 0; i < 5; i++){
		//for each array in board
		for(var k = 0; k <5; k++){
			//each item in array
			if(board[i][k]!=0){
				//not a blank, a.k.a. spot with a ship
				if(board[i][k]==1){
					fill(225,0,0); //will change color of drawn square
				}else{
					fill(0,0,225); //will change color of drawn square
				}
			}else{
				//blank
				fill(225,225,225);
			}
			//position in board array reflected in x, y coordinate by multiplying index for row and column
			rect(boxSize*i, boxSize*k, boxSize,boxSize);
		}
	}
	
}

function mouseClicked(){
	if(spot.x==floor(mouseX/100) && spot.y==floor(mouseY/100)){
		board[floor(mouseX/100)][floor(mouseY/100)]=1; //hit
	}else{
		board[floor(mouseX/100)][floor(mouseY/100)]=2; //miss
	}
}
