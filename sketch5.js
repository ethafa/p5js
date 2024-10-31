let sketch5 = (p) => {
  let r = 0;
  let b = 255;

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    // Map the red color component based on the mouse's x position
    r = p.map(p.mouseX, 0, p.width, 0, 255);
    
    // Set the background color with dynamic red and fixed blue component
    p.background(r, 0, b);
    
    // Draw the main moving circle
    p.fill(70, 200, 80);
    p.noStroke();
    p.ellipse(p.mouseX, 200, 50, 50);
    
    // Display text
    p.fill(0, 0, 255);
    p.textStyle(p.BOLDITALIC);
    p.text('be patient', 300, 205);
  };
};

// Attach the sketch to the div with id="sketch5"
new p5(sketch5, 'sketch5');
