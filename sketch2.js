let sketch1 = (p) => {
  p.setup = function() {
    p.createCanvas(400, 400);
  p.background(250,250,100);
  };
  
    p.draw = function() {
    
    p.fill(250,200,200,50);
  p.noStroke();
 p.ellipse(mouseX,mouseY,50,50);
   
      };
  };
  p.mousePressed = function() {
    
   p.background(230,0,0,40);
   
      };
  };
  new p5(sketch2, 'sketch2'); // Attach sketch to the div with id="sketch2"

