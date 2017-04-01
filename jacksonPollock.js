function rand(num){
	return Math.floor(Math.random()*num);
}

function setup(){
	createCanvas(500,500);
}

function draw(){
	fill(rand(225),rand(225),rand(225));
	if(Math.random()>.5){
		ellipse(mouseX, mouseY, rand(40),rand(40));
	}else{
		rect(mouseX,mouseY,rand(40),rand(40));
	}
}
