let sketch1 = (p) => {
p.setup = function() {
  p.createCanvas(400, 400);
  p.background(250,250,100);
};

  p.draw = function() {
  
  p.background(0);
  
  p.fill(0,255,0);
  p.noStroke();
  p.circle(200,200,50,50);
  
  p.fill(140,0,191);
  p.circle(100,100,25,25);
  p.circle(300,100,25,25);
  p.circle(300,300,25,25);
  p.circle(100,300,25,25);
  
  p.stroke(255,255,255);
  p.noFill();
  p.rect(150,150,100,100);
  p.rect(100,100,200,200);
 
    };
};

new p5(sketch1, 'sketch1'); // Attach sketch to the div with id="sketch1"

