let sketch2 = (p) => {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(250, 250, 100); // Initial background color
  };
  
  p.draw = function() {
    p.fill(250, 200, 200, 50); // Semi-transparent fill color
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 50, 50); // Draw ellipse at mouse position
  };
  
  // Background color change on mouse press
  p.mousePressed = function() {
    p.background(230, 0, 0, 40); // Semi-transparent red background
  };
};

// Attach sketch to the div with id="sketch2"
new p5(sketch2, 'sketch2');
