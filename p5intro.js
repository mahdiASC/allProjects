
var r = 200;
function setup(){
	createCanvas(400,400);
	noStroke();
	background(225,0,0);
	ellipseMode(DEFAULT);
	ellipse(0,0,200);
	fill(0);
	ellipseMode(CENTER);
	ellipse(0,0,200);
	frameRate(10);
}

// function draw(){
// 	if(r <20){
// 		r = 200;
// 		background(225,0,0);
// 	}
	
// 	fill(random(225),random(225),random(225));
// 	ellipse(200,200,r,r);
// 	r = r - 5;
// }