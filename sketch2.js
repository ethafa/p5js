// sketch2.js
let sketch2 = function(p) {
	function setup() {
  createCanvas(400, 400);
  background(250,250,100);
}

function draw() {
  
  fill(250,200,200,50);
  noStroke();
  ellipse(mouseX,mouseY,50,50);
 
  
 
}

function mousePressed() {
  background(230,0,0,40);
  
}
};

new p5(sketch2, 'sketch2');
